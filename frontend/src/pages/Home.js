import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()
useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+'/products?'+searchParams)
    .then(function (response) {
      console.log(response)
      setProducts(response.data.product);
    })
    .catch(function (error) {
      console.log(error);
    });
},[searchParams])
    
    // useEffect(() => {
    //     fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
    //     .then(res => res.json())
    //     .then( res => setProducts(res.product.products))
    //     console.log(products)
    // },[searchParams])

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product} />)} 
        </div>
        </section>
    </Fragment>
}