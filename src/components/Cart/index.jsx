import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../../components/Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, addToCart, removeProductFromCart, clearCart } = useCart();

  const CartItem = ({
    thumbnail,
    price,
    title,
    quantity,
    addToCart,
    removeProductFromCart,
  }) => {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>

        <footer>
          <small>Quantity: {quantity}</small>
          <button onClick={addToCart}>+</button>
          <button onClick={removeProductFromCart}>-</button>
        </footer>
      </li>
    );
  };

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeProductFromCart={() => removeProductFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
