import React, { Suspense, lazy } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/home.page";
// import RecipePage from "./pages/Recipe/recipe.page";
// import ResultsPage from "./pages/results/results.components";
// import SavedPage from "./pages/saved/saved.pages";
// import CartPage from "./pages/cart/cart.page";
import LoadingSpinner from "./components/loadingSpinner/spinner.component";

const SavedPage = lazy(() => import("./pages/saved/saved.pages"));
const CartPage = lazy(() => import("./pages/cart/cart.page"));
const ResultsPage = lazy(() => import("./pages/results/results.components"));
const RecipePage = lazy(() => import("./pages/Recipe/recipe.page"));

export default function App() {
  return (
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
  );
}
