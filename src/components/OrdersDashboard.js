import { Fragment, useState, useEffect } from "react";
import MainView from "./dashoard-components/MainView";
import CreateOrder from "./dashoard-components/CreateOrder";
import DeleteOrder from "./dashoard-components/DeleteOrder";

function OrdersDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderType, setOrderType] = useState("All Orders");
  const [selected, setSelected] = useState([]);
  const [createOrderView, setCreateOrderView] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const baseUrl = `https://red-candidate-web.azurewebsites.net/api/Orders`;

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    ApiKey: "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
  });

  const getOrdersOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const getOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl, getOrdersOptions);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleChange = (event) => {
    setOrderType(event.target.value);
  };

  const deleteOrders = () => {
    setDeleteOpen(true);
  };

  const confirmDeleteOrders = () => {
    console.log(selected);
    fetch(`${baseUrl}/Delete`, {
      method: "POST",
      body: JSON.stringify(selected),
      headers: myHeaders,
    })
      .then(() => {
        console.log(selected);
        getOrders();
        setDeleteOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeDelete = () => setDeleteOpen(false);

  const createOrder = () => {
    createOrderView === true
      ? setCreateOrderView(false)
      : setCreateOrderView(true);
    console.log("let's create this order...");
  };

  const handleClick = (row) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <Fragment>
      {createOrderView ? (
        <CreateOrder
          createOrder={createOrder}
          myHeaders={myHeaders}
          baseUrl={baseUrl}
          getOrders={getOrders}
          setData={setData}
        />
      ) : (
        <MainView
          data={data}
          loading={loading}
          error={error}
          orderType={orderType}
          handleClick={handleClick}
          deleteOrders={deleteOrders}
          createOrder={createOrder}
          handleChange={handleChange}
          selected={selected}
        />
      )}
      <DeleteOrder
        deleteOpen={deleteOpen}
        closeDelete={closeDelete}
        selected={selected}
        confirmDeleteOrders={confirmDeleteOrders}
      />
    </Fragment>
  );
}

export default OrdersDashboard;

// {"errors":{"[0]":["Input string '730b3c60-75d9-4f48-a28a-a9f07df6c1ea' is not a valid number. Path '[0]', line 1, position 37."]},"type":"https://tools.ietf.org/html/rfc7231#section-6.5.1","title":"One or more validation errors occurred.","status":400,"traceId":"|bd2c00ae-424d0e2d8208eb47."}
