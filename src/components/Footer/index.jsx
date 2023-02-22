// import { useFilters } from "../../hooks/useFilters";
// import { useCart } from "../../hooks/useCart";
import "./Footer.css";

export function Footer() {
  //   const { filters } = useFilters();
  // const { cart } = useCart();

  return (
    <footer className="footer">
      <h4>
        React technical challenge ⚛️ － <span>@cxcarvaj</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  );
}
