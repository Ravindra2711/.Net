import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';


function App() {
  const ProductName = "laptop";
  const elem = <h1>React was released in {2010 + 3}</h1>;
  const product = <h1>Product name is {ProductName}</h1>;
  const p = <h1>Product name is {ProductName ? ProductName : 'lenovo'}</h1>;
  const Products = ['Laptop', 'Mobile', 'TAB'];
  return (
    <div className="App">
      {elem}
      <h2>This is the function app</h2>
      {product}
      {p}
      <h2>Products:</h2>
      <ul>
        {Products.map((product, index) => (<li key={index}>{product}</li>))} 
        {/* use of map to iterate */}
        
      </ul>
    </div>
  );
}

export default App;