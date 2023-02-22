import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import "./Filters.css";

export const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = ({ target }) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        minPrice: target.value,
      };
    });
  };

  const handleChangeCategory = ({ target }) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        category: target.value,
      };
    });
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price starting at:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};
