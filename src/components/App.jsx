import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
// import Home from "./Home"
// import SkuIdView from "./SkuIdView"
// import Sku from "./Sku"
import products from "../products"
// import PageSwitch from "./PageSwitch"

export default function NodisApp() {
  return ( <
    Router >
    <
    PageSwitch / >
    <
    /Router>
  );
}

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

function LinkProducts(props) {
  return ( <
    div >
    {props.key}
    <
    Link to = {
      `/SKU/${props.id}`
    } > {
      props.name
    } < /Link> < /
    div >
  );
}

function Home() {
  return ( <
      div >
      <
      Link to = "/" > Home < /Link> <
      h2 > Products < /h2> {
      products.map(LinkProducts)
    } <
    /div>
);
}

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
