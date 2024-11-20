/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/product?"+ searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((error) => console.log(error));
  }, [searchParams]);
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5  ">
        <div className="row ">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};
