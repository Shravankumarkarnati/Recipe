import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../redux/reducers/root.reducer";
import { initialState as init_state } from "./initialState";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";

// override render method
export const render = (
  ui,
  {
    initialState = init_state,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    initialEntries = ["/"],
    ...renderOptions
  } = {},
  router = true
) => {
  function Wrapper({ children }) {
    return router ? (
      <Provider store={store}>
        <MemoryRouter initialEntries={[...initialEntries]}>
          {children}
        </MemoryRouter>
      </Provider>
    ) : (
      <Provider store={store}>{children}</Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
