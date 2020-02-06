import React from "react";
import {
  BrowserRouter as
  Link,
} from "react-router-dom";
import products from "../products"

function Sku() {
  return ( <
    div >
    <
    Link to = "/" > Home < /Link> {
    products.map(product => < div > {
        product.id
      }, {
        product.name
      }, {
        product.description
      }, {
        product.price
      } < /div>)} < /
      div > );
  }

  export default Sku;
