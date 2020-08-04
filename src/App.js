import React, { Suspense, lazy } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoadingSpinner from "./components/loadingSpinner/spinner.component";
import HomePage from "./pages/homepage/home.page";

const SavedPage = lazy(() => import("./pages/saved/saved.pages"));
const CartPage = lazy(() => import("./pages/cart/cart.page"));
const ResultsPage = lazy(() => import("./pages/results/results.components"));
const RecipePage = lazy(() => import("./pages/Recipe/recipe.page"));

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./variables.scss');

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
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
