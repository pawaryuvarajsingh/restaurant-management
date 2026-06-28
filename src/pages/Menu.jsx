import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Menu() {
  const foods = useFetch("http://localhost:3000/foods");
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredFoods = category
    ? foods.filter((food) => food.category === category)
    : foods;

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#d35400" }}>
        Restaurant Menu
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setSearchParams({ category: "Fast Food" })}>
          Fast Food
        </button>

        <button
          onClick={() => setSearchParams({ category: "Chinese" })}
          style={{ marginLeft: "10px" }}
        >
          Chinese
        </button>

        <button
          onClick={() => setSearchParams({})}
          style={{ marginLeft: "10px" }}
        >
          Show All
        </button>
      </div>

      <div className="food-container">
        {filteredFoods.map((food) => (
          <div key={food.id} className="food-card">
            <h3>{food.name}</h3>

            <p>
              <strong>Price:</strong> ₹{food.price}
            </p>

            <p>
              <strong>Category:</strong> {food.category}
            </p>

            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;