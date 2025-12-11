import React, { useState } from "react";
import axios from "axios";
import { products } from "./data";

const ShowRecipe = () => {
  const [instructionsData, setInstructionsData] = useState({});

  const fetchRecipeDetails = (id) => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        setInstructionsData((prev) => ({
          ...prev,
          [id]: response.data.instructions,
        }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full bg-white text-black p-4 m-4 rounded-lg shadow-lg">
      {products.map((item) => (
        <div key={item.id} className="mb-4 p-3 border rounded-lg">
          <h2><b>Dish:</b> {item.dish}</h2>
          <h2><b>Price:</b> ₹{item.price}</h2>
          <hr className="my-2" />

          <button
            onClick={() => fetchRecipeDetails(item.id)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            View Details
          </button>

          {/* Show fetched instructions below */}
          {instructionsData[item.id] && (
            <p className="mt-3 text-gray-800">
              <b>Instructions:</b> {instructionsData[item.id]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowRecipe;
