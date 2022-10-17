import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let products = [
    {name:"chocolat", description:" good for health and soul", price:5},
    {name:"poulet", description:" so tasty", price:5}
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( //we pass array to the App props
    <App products={products}  />
);
