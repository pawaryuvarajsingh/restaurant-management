import { useState } from "react";
import axios from "axios";

function AddFood() {
  const [food, setFood] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!food.name || !food.price || !food.category) {
      alert("Please fill all fields");
      return;
    }

    await axios.post("http://localhost:3000/foods", food);

    alert("Food Added Successfully!");

    setFood({
      name: "",
      price: "",
      category: "",
    });
  };

  return (
    <div>
      <h2>Add Food</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={food.price}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={food.category}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFood;