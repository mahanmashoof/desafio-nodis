import React from 'react';
import {
  BrowserRouter as
  Link,
  useParams
} from "react-router-dom";
import products from "../products"

function SkuIdView() {
  let {
    id
  } = useParams();
  let product = products[parseInt(id, 10)];

  if (!product) return ( <
    div >
    <
    Link to = "/" > Home < /Link>
    Product not found <
    /div>
  );

  return ( <
    div >
    <
    Link to = "/" > Home < /Link> <
    h1 > {
      product.name
    } < /h1> <
    img alt = ""
    src = {
      product.imgURL
    }
    /> <
    h2 > R$ {
      product.price
    } < /h2> <
    p > {
      product.description
    } < /p> < /
    div >
  );
}

export default SkuIdView;
