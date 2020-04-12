import React from "react";
import { connect } from "react-redux";
// NativeBase Components
import { Text, List, Button } from "native-base";
import { checkoutCart } from "../../redux/actions";
// Component
import CartItem from "./CartItem";

const CoffeeCart = ({ items, checkout }) => {
  const cartItems = items.map((item) => (
    <CartItem item={item} key={`${item.drink} ${item.option}`} />
  ));

  return (
    <List>
      {cartItems}
      <Button full danger onPress={checkout}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};
const mapStateToProps = (state) => ({
  items: state.cartState.items,
});
const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => dispatch(checkoutCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
