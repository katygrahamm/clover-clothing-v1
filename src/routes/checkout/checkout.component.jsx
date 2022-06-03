// import CartItem from "../../components/cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>PRODUCT</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>DESCRIPTION</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>QUANTITY</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>PRICE</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>REMOVE</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      ;<Total as="span">Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
