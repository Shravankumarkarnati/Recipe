import React from "react";
import App from "../App";
import { render } from "../utils/test-utils";

describe("App component test", () => {
  test("Non Empty App Component", () => {
    const { getByTestId } = render(<App />);

    const appComponent = getByTestId("appComponent");
    expect(appComponent).not.toBeNull();
  });

  it("Renders the connected app with initialState", () => {
    const { getByText } = render(<App />);

    const appComponent = getByText(/Find/i);
    expect(appComponent).toBeInTheDocument();
  });
});
