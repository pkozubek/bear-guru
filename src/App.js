import React from "react";
import { Route, Switch } from "react-router-dom";
import Beers from "./containers/Beers/Beers";
import Layout from "./containers/Layout/Layout";
import Favourite from "./containers/Favourite/Favourite";
import BeerDetails from "./containers/BeerDetails/BeerDetails";
import * as styles from "./App.module.css";

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Beers} />
      <Route path="/favourite" exact component={Favourite} />
      <Route path="/details/:id" component={BeerDetails} />
      <Route path="/favourite/details/:id" component={BeerDetails} />
    </Switch>
  );

  return (
    <div className={styles.App}>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
