import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const MyDataComponent = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to show loading indicator

  // Fetch data from backend when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data") // Replace with your backend URL
      .then((response) => {
        setData(response.data); // Set the fetched data to state
        setLoading(false); // Turn off loading indicator
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Turn off loading even if there's an error
      });
  }, []);

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Fetched Data from MySQL</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} {item.email}
              <br></br>
              {item.phone}
            </li>
            // Replace 'id' and 'name' with your actual data fields
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyDataComponent;
