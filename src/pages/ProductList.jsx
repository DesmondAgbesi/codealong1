// import { useEffect, useState } from "react";//in built

// import axios from "axios"; //third parties installed
import Spinner from "../components/Spinner";
import useAxios from "../hooks/useAxios";

import Product from "../components/Product"; //our own components

 function ProductList(){
  // const [products, setProducts] = useState([]);
  const { data, isLoading, error } = useAxios("https://api.escuelajs.co/api/v1/products");

  // useEffect(()=> {
  //   const getProducts =async() =>  {
  //     const results = await axios.get("https://api.escuelajs.co/api/v1/products");
  //     setProducts(results.data)
  //   };
  //   getProducts();
  // }, []);
  // console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;
  return (
  <div className="flex flex-wrap gap-10 pt-10 justify-center">
    {
      data.map((data) =>(
        <Product product = {data} />
      )
      )
    }
  </div>

  )
 }

 export default ProductList;