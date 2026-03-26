import React, { useEffect, useState } from "react";
import axios from "axios";

function CarList() {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const API = "http://127.0.0.1:8000/api/cars/";

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    axios.get(API).then((res) => {
      setCars(res.data);
    });
  };

  const addCar = () => {
    axios.post(API, { name, price }).then(() => {
      fetchCars();
      setName("");
      setPrice("");
    });
  };

  const deleteCar = (id) => {
    axios.delete(API + id + "/").then(() => {
      fetchCars();
    });
  };

  return (
    <div>
      <h2>Car Rental CRUD</h2>

      <input
        placeholder="Car Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addCar}>Add Car</button>

      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.name} - {car.price}
            <button onClick={() => deleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
