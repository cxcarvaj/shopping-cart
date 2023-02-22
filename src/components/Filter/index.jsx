import { useState } from "react";
import "./Filters.css";

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = ({ target }) => {
    setMinPrice(target.value);
    onChange((prevState) => {
      return {
        ...prevState,
        minPrice: target.value,
      };
    });
  };

  const handleChangeCategory = ({ target }) => {
    onChange((prevState) => {
      return {
        ...prevState,
        category: target.value,
      };
    });
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price starting at:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};
