import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
// import Nav from "./components/Navbar";

import {
  Home,
  Products,
  PrivateRoute,
  Error,
  CheckoutPage,
  Cart,
  About,
  SingleProduct,
  AuthWrapper,
} from "./pages";
function App() {
  useEffect(() => {
    document.title = "The FurNurture Store";
  }, []);
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          ></Route>

          <PrivateRoute exact path="/checkout">
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
