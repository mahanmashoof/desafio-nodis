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
      <Route exact path="/skus" children={<Sku />} />
      <Route path="/skus/:id" children={<SkuIdView />} />
    </div>
  );
}

function LinkProducts(props) {
  return (
    <div class="product-card">
      <Link to={`/skus/${props.id - 1}`}>
        <img class="product-card-img" alt="" src={props.imageUrl} />
      </Link>
      <p class="price">R$ {props.salePrice}</p>
      <p id="product-card-text">{props.name}</p>
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
      <h1 id="home-headline"> Products </h1>
      {products.map(LinkProducts)}
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
        <h1> {product.name}</h1>
        <table class="prod-table">
          <tr>
            <td>
              <img class="product-img" alt="" src={product.imageUrl} />
            </td>
            <td class="other-info">
              <h3> Category:</h3>
              <p> {product.category} </p>
              <br />
              <h3> Package dimensions:</h3>
              <p> Height: {product.package.height} cm </p>
              <p> Width: {product.package.width} cm</p>
              <p> Depth: {product.package.depth} cm</p>
              <p> Weight: {product.package.weight} g</p>
            </td>
          </tr>
        </table>
        <h2 class="price"> R$ {product.salePrice} </h2>
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
          {product.id}, {product.name}, {product.ean}, {product.category},{" "}
          {product.package.height}, {product.package.width},{" "}
          {product.package.depth}, {product.package.weight},{" "}
          {product.description}, {product.salePrice}, {product.promotionalPrice}
          , {product.stock}
        </div>
      ))}
    </div>
  );
}
