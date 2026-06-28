import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditFood() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/foods/${id}`)
      .then((response) => {
        setFood(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3000/foods/${id}`, food);

    alert("Food Updated Successfully!");

    navigate("/admin");
  };

  return (
    <div>
      <h2>Edit Food</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={food.name}
          onChange={handleChange}
          placeholder="Food Name"
        />
        <br /><br />

        <input
          type="number"
          name="price"
          value={food.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <br /><br />

        <input
          type="text"
          name="category"
          value={food.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <br /><br />

        <button type="submit">Update Food</button>
      </form>
    </div>
  );
}

export default EditFood;