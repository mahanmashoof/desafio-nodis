import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";


export default function NodisApp() {
  return (
    <Router>
      <PageSwitch />
    </Router>
  );
}

function PageSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/SKU/:id" children={<SkuIdView />} />
        <Route path="/SKU" children={<SKU />} />
      </Switch>
    </div>
  );
}

function linkProducts(props) {
  return(
    <div>
      <Link to={`/SKU/${props.id}`}>{props.name}</Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Products</h2>
      {products.map(linkProducts)}
    </div>
  );
}

function SKU() {
   return (
       <div>
        <Link to="/">Home</Link>
        {products.map(ph => <div> {ph.id}, {ph.name}, {ph.description}, {ph.price} </div>)}
       </div>);
}

function SkuIdView() {
  let { id } = useParams();
  let product = products[parseInt(id, 10)];

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{product.name}</h1>
      <img alt="" src={product.imgURL} />
      <h2>R$ {product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}

const products = [
  { id: 0, name: "Dark Orchid", description: "DarkOrchid", price: "10", imgURL:"" },
  { id: 1, name: "Lime Green", description: "LimeGreen", price: "20", imgURL:"" },
  { id: 2, name: "Tomato", description: "Tomato", price: "30", imgURL:"" },
  { id: 3, name: "Seven Ate Nine", description: "#789", price: "40", imgURL:"" },
  { id: 4, name: "Crimson", description: "Crimson", price: "50", imgURL:"" },
  { id: 5, name: "New", description: "this is new", price: "60", imgURL:"" }
];
