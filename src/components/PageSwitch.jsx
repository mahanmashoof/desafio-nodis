import React from "react";
import {
  BrowserRouter as
  Route
} from "react-router-dom";
// import products from "../products"
import Home from "./Home"
import SkuIdView from "./SkuIdView"
import Sku from "./Sku"

function PageSwitch() {
  return ( <
    div >
    <
    Route exact path = "/"
    children = {
      <
      Home / >
    }
    /> <
    Route exact path = "/SKU"
    children = {
      <
      Sku / >
    }
    />
    <
    Route path = "/SKU/:id"
    children = {
      <
      SkuIdView / >
    }
    /> <
    /div>
  );
}

  export default PageSwitch;
