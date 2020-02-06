import React from "react";
import {
  BrowserRouter as
  Link,
} from "react-router-dom";
import products from "../products"

function LinkProducts(props) {
  return ( <
    div >
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

export default Home;
