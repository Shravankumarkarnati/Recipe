import { fireEvent } from "@testing-library/react";
import React from "react";
import HomePage from "../pages/homepage/home.page";
import { render } from "../utils/test-utils";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Homepage tests", () => {
  beforeEach(() => {
    expect.assertions(1);
  });

  it("non empty body component", () => {
    const { getByTestId } = render(<HomePage />);
    const bodyComponent = getByTestId("bodyComponent");
    expect(bodyComponent).not.toBeNull();
  });

  it("search input - initially empty", () => {
    const { getByTestId } = render(<HomePage />);
    const searchContainer = getByTestId("searchContainer");
    expect(searchContainer.value).toBe("");
  });

  it("search input - simulate change", () => {
    const { getByTestId } = render(<HomePage />);
    const searchContainer = getByTestId("searchContainer");
    fireEvent.change(searchContainer, { target: { value: "chicken" } });
    expect(searchContainer.value).toBe("chicken");
  });

  it("search button - check button test", () => {
    const { getByTestId } = render(<HomePage />);
    const submitBtn = getByTestId("btnMain");
    expect(submitBtn).toHaveTextContent("Search");
  });

  it("clicking search button with empty input redirects to homepage page", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <HomePage />
      </Router>,
      undefined,
      false
    );
    const submitBtn = getByTestId("btnMain");
    fireEvent.click(submitBtn);
    expect(history.location.pathname).toBe("/");
  });

  it("clicking search button goes to results page", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <HomePage />
      </Router>,
      {},
      false
    );
    const submitBtn = getByTestId("btnMain");
    const searchContainer = getByTestId("searchContainer");
    fireEvent.change(searchContainer, { target: { value: "chicken" } });
    fireEvent.click(submitBtn);
    expect(history.location.pathname).toBe("/results");
  });
});
