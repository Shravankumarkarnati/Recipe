import React from "react";

import CartBody from "../../components/cartBody/cartBody.components";
import LayoutPage from "../Layout/layout.page";

import { connect } from "react-redux";

import { addAllIngredients } from "../../redux/reducers/cart/cart.actions";

const CartPage = ({ cartItems, setAllIngredients }) => {
  let allIngredients = {};
  Object.values(cartItems).forEach((cur) => {
    const cur_ingredients = cur.ingredients;
    cur_ingredients.forEach((cur_ing) => {
      const ing_id = cur_ing.id;
      if (allIngredients[ing_id]) {
        allIngredients[ing_id].amount += cur_ing.amount;
      } else {
        allIngredients[ing_id] = {
          id: ing_id,
          amount: cur_ing.amount,
          name: cur_ing.name,
          originalString: cur_ing.originalString,
          units: cur_ing.units,
        };
      }
    });
  });
  setAllIngredients(allIngredients);
  return (
    <LayoutPage>
      <CartBody />
    </LayoutPage>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAllIngredients: (allIngredients) =>
      dispatch(addAllIngredients(allIngredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
