import React from "react";

import { ReactComponent as Plus } from "../../images/cartPage/plus.svg";
import { ReactComponent as Minus } from "../../images/cartPage/minus.svg";
import { ReactComponent as Cross } from "../../images/cartPage/cross-circle.svg";

import {
  adjustIng,
  clearCart,
  deleteIngredient,
} from "../../redux/reducers/cart/cart.actions";
import { connect } from "react-redux";

import {
  CartBodyStyled,
  Title,
  ClearBtn,
  IngredientContainer,
  Ingredients,
  ChangeController,
  ChangeBtn,
  InputContainer,
  IngredientText,
} from "./cartBody.styles";

const CartBody = ({
  ingredients,
  changeAmount,
  clearCart,
  deleteIngredient,
  cartCount,
}) => {
  const handleAmountChangeBtn = (e, id, old_amount) => {
    const sign = e.target.closest("button").dataset.sign === "plus" ? +1 : -1;
    const cap = old_amount % 1 !== 0 ? 0.1 : 1;
    const new_amount = Math.round((old_amount + cap * sign) * 10) / 10;
    if (new_amount > 0) changeAmount(id, new_amount);
  };

  const handleClearCart = () => {
    const sure = window.confirm(
      "Clear All Cart Items? \nYou can't undo this action!"
    );
    if (sure) clearCart();
  };

  const handleDeleteItem = (ing_id) => {
    deleteIngredient(ing_id);
    if (Object.values(ingredients).length === 0) {
      clearCart();
    }
  };

  return !cartCount ? (
    <CartBodyStyled>
      <Title>ingredients</Title>
      <IngredientText
        style={{ fontSize: "3rem", textAlign: "center", fontWeight: "700" }}
      >
        Your Basket is Empty!
      </IngredientText>
    </CartBodyStyled>
  ) : (
    <CartBodyStyled>
      <Title>ingredients</Title>
      <ClearBtn onClick={handleClearCart}>Clear All Items</ClearBtn>
      <Ingredients>
        {Object.values(ingredients).map((ing) => (
          <IngredientContainer key={ing.id}>
            <ChangeController>
              <ChangeBtn
                title="Decrease Ingredient Amount"
                data-sign="minus"
                onClick={(e) => handleAmountChangeBtn(e, ing.id, ing.amount)}
              >
                <Minus />
              </ChangeBtn>
              <InputContainer
                maxLength="4"
                size="2"
                value={ing.amount}
                readOnly={true}
              />
              <ChangeBtn
                title="Increase Ingredient Amount"
                data-sign="plus"
                onClick={(e) => handleAmountChangeBtn(e, ing.id, ing.amount)}
              >
                <Plus />
              </ChangeBtn>
            </ChangeController>
            <IngredientText>{ing.units}</IngredientText>
            <IngredientText>{ing.name}</IngredientText>
            <IngredientText gridtabletfix={true}>
              {ing.originalString}
            </IngredientText>
            <ChangeBtn
              fillcolor="red"
              title="Delete Ingredient"
              onClick={() => handleDeleteItem(ing.id)}
            >
              <Cross />
            </ChangeBtn>
          </IngredientContainer>
        ))}
      </Ingredients>
    </CartBodyStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.cart.allIngredients,
    cartCount: state.cart.cartCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (id, amount) => dispatch(adjustIng(id, amount)),
    clearCart: () => dispatch(clearCart()),
    deleteIngredient: (id) => dispatch(deleteIngredient(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartBody);
