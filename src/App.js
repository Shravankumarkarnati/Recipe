import React from "react";
import "./App.scss";

import HomePage from "./pages/homepage/home.page";
import RecipePage from "./pages/Recipe/recipe.page";
import ResultsPage from "./pages/results/results.components";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/results" exact component={ResultsPage} />
        <Route path="/recipe" exact component={RecipePage} />
      </Switch>
    </div>
  );
}
