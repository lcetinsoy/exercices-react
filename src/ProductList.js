import ProductDetail from "./ProductDetail"

export default function ProductList(props){

    let products = props.products
    console.log(products) // array of object

    //we can use map to transform our array of objet
    //into an array of components

    // //works but slow to type all attributes
    // let productComponents = products.map(productData => 
    //                     <ProductDetail 
    //                         name={productData.name} 
    //                         description={productData.description}
    //                         price={productData.price}
    //                     />
    // )

    //works but slow to type all attributes
    // we use the object destructing every of the object will by 
    //an attribute. And every value will the attribute value
    let productComponents = products.map(productData => 
        <ProductDetail 
            {...productData} 
        />
    )

    return (<div>
        {/* Here we want a collection of ProductDetail Components*/}

        {/* here we would like an array of Components to include in the JSX */}
        
        {/* productComponents */}

        {products.map(data => <ProductDetail {...data} /> )}

    </div>)
}