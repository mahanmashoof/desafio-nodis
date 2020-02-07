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
import products from "../products";
// import PageSwitch from "./PageSwitch"
import logo from "../logos/logo-white.png";

export default function NodisApp() {
  return (
    <Router>
      <PageSwitch />
    </Router>
  );
}

function PageSwitch() {
  return (
    <div>
      <Route exact path="/" children={<Home />} />
      <Route exact path="/SKU" children={<Sku />} />
      <Route path="/SKU/:id" children={<SkuIdView />} />
    </div>
  );
}

function LinkProducts(props) {
  return (
    <div>
      {props.key} <Link to={`/SKU/${props.id}`}> {props.name} </Link>
    </div>
  );
}

function Logo() {
  return (
    <div class="header">
      <Link to="/">
        <img src={logo} alt="logo" class="logo" />
      </Link>
      <h1> Nodis </h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Logo />
      <h2> Products </h2> {products.map(LinkProducts)}
    </div>
  );
}

function SkuIdView() {
  let { id } = useParams();
  let product = products[parseInt(id, 10)];

  if (!product)
    return (
      <div>
        <Link to="/"> Home </Link>
        Product not found
      </div>
    );

  return (
    <div>
      <Logo />
      <div class="product-page">
        <h1> {product.name} </h1>
        <img class="product-img" alt="" src={product.imgURL} />
        <h2> R$ {product.price} </h2>
        <p> {product.description} </p>
      </div>
    </div>
  );
}

function Sku() {
  return (
    <div>
      <Link to="/"> Home </Link>
      {products.map(product => (
        <div>
          {product.id}, {product.name}, {product.description}, {product.price}
        </div>
      ))}
    </div>
  );
}
