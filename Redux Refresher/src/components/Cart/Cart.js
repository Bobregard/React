import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const itemsList = items.map((p) => (
    <CartItem
      key={p.id}
      item={{
        id: p.id,
        title: p.title,
        quantity: p.totalAmount,
        total: p.totalPrice,
        price: p.price,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{itemsList}</ul>
    </Card>
  );
};

export default Cart;
