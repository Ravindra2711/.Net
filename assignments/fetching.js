import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import React from 'react';
import Product from './components/Product';
import Category from './components/Category';

// Problem Statement:
// Let's say we have a Product component that fetches product data and a Category component that fetches category data. Both components will use useEffect to fetch their respective data when the component mounts. We will also handle the effect cleanup if needed.

// Solution:

// 1. Install React (if you haven't already)
// If you haven’t already set up a React project, you can do so by running the following command:
// npx create-react-app product-category-app
// cd product-category-app
// npm start

// 2. Setting up Components
// We’ll create two components, Product and Category, and use useEffect inside them to fetch data.

// 3. Product Component
// First, let's create a Product component that fetches product data from an API and displays it.

// src/components/Product.js

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch product data
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when component mounts

  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;

// 4. Category Component
// Next, let's create a Category component that fetches category data from an API and displays it.

// src/components/Category.js

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch category data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Error fetching categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []); // Empty dependency array ensures this runs once when component mounts

  if (loading) {
    return <p>Loading categories...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

// 5. App Component
// Now, let’s use both Product and Category components inside the App component. This will be the main entry point for our React application.

// src/App.js

const App = () => {
  return (
    <div>
      <h1>Product and Category App</h1>
      <Category />
      <Product />
    </div>
  );
};

export default App;

// 6. Run the Application
// If you have set up everything correctly, running the app will display the categories first, followed by the list of products once they have been fetched.
// npm start

// 7. Expected Output
// Loading Message: Initially, the Product and Category components will show loading messages ("Loading products..." and "Loading categories...") while they wait for data.
// Categories List: After the categories have loaded, the list of categories will be shown.
// Products List: Once the product data has loaded, the list of products will be displayed.

// Here’s an example of how it might look in the browser:
// Product and Category App
// Categories
// - Electronics
// - Jewelry
// - Men's Clothing
// - Women's Clothing
// Products
// - Product 1
// - Product 2
// - Product 3
// - Product 4...

// Explanation:
// useEffect: We used the useEffect hook to fetch data from APIs when the component mounts. The empty array [] passed as the second argument ensures that the effect only runs once, similar to componentDidMount in class components.
// useState: This is used to store the data (products and categories), loading state, and error state.

// By following these steps, you should have a working React app that fetches product and category data using useEffect.
