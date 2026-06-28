import axios from "axios";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function FoodList() {
  const foods = useFetch("http://localhost:3000/foods");

  const deleteFood = async (id) => {
    await axios.delete(`http://localhost:3000/foods/${id}`);
    alert("Food Deleted Successfully");
    window.location.reload();
  };

  return (
    <div>
      <h2>Food List</h2>

      {foods.map((food) => (
        <div
          key={food.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{food.name}</h3>
          <p>Price: ₹{food.price}</p>
          <p>Category: {food.category}</p>

          <Link to={`/admin/edit/${food.id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => deleteFood(food.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
