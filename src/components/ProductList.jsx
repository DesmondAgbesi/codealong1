import { useEffect, useState } from "react";//in built

import axios from "axios"; //third parties installed

import Product from "./Product"; //our own components

 function ProductList(){
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    const getProducts =async() =>  {
      const results = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(results.data)
    };
    getProducts();
  }, []);
  console.log(products);

  return (
  <div className="flex flex-wrap gap-10 pt-10 justify-center">
    {
      products.map((product) =>(
        <Product product = {product} />
      )

      )
    }
  </div>

  )
 }

 export default ProductList;