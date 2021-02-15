import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoadingSpinner from "./components/loadingSpinner/spinner.component";
import HomePage from "./pages/homepage/home.page";
import { theme } from "./theme";
import "./App.scss";

const SavedPage = lazy(() => import("./pages/saved/saved.pages"));
const CartPage = lazy(() => import("./pages/cart/cart.page"));
const ResultsPage = lazy(() => import("./pages/results/results.components"));
const RecipePage = lazy(() => import("./pages/Recipe/recipe.page"));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div data-testid="appComponent">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Suspense fallback={<LoadingSpinner />}>
            <Route path="/saved" exact component={SavedPage} />
            <Route path="/basket" exact component={CartPage} />
            <Route path="/results" exact component={ResultsPage} />
            <Route path="/recipe" exact component={RecipePage} />
          </Suspense>
        </Switch>
      </div>
    </ThemeProvider>
  );
}
