//for testing
export const initialState = {
  cart: { cartItems: {}, allIngredients: {}, cartCount: 0 },
  likes: {
    likes: {},
    countLikes: 0,
  },
  results: {
    results: null,
    selectedRecipe: null,
    changedIngredients: {
      servings: null,
      ingredients: null,
    },
    searchStatus: null,
  },
  search: {
    search: null,
    hamburger: false,
  },
};
