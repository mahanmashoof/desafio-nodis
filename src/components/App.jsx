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

function App() {
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
      <p class="price">R$ {(props.salePrice / 100).toFixed(2)}</p>
      <p id="product-card-text">{props.name}</p>
    </div>
  );
}

function Header() {
  return (
    <div class="header">
      <Link to="/">
        <img src={logo} alt="logo" class="logo" />
      </Link>
      <h1> Nodis </h1>
    </div>
  );
}

function Footer() {
  return(
    <div class="header">
      <p>Copyright © Nodis {(new Date().getFullYear())}</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <h1 class="main-headline"> Products </h1>
      <div class="home-icons">{products.map(LinkProducts)}</div>
      <Footer />
    </div>
  );
}

function SkuIdView() {
  let { id } = useParams();
  let product = products[parseInt(id, 10)];

  if (!product)
    return (
      <div>
        <Header />
        <h1 class="main-headline">Product not found</h1>
      </div>
    );
  return (
    <div>
      <Header />
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
              <br />
              <h3> Left in stock:</h3>
              <p class="price"> {product.stock} pcs</p>
            </td>
          </tr>
        </table>
        <h2 class="price"> R$ {(product.salePrice / 100).toFixed(2)} </h2>
        <p> {product.description} </p>
      </div>
      <Footer />
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

export default App;
