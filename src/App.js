import Contact from "./Contact";
import ProductList from "./ProductList";


function App(props){

  console.log(typeof props.products) //it is an  array (of obj) !


  return (<div>
      <h1>Supershop! </h1>

      
      <p>
        We sell {props.products.length} products (so many) !
        buy !!
      </p>
      {/* we pass the products to the ProductList component */}
      <ProductList products={props.products}/>

      <Contact />


  </div>)


}

export default App; 
