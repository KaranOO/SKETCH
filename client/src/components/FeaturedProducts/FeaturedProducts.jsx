import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

const FeaturedProducts = ({ type }) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>Hello, These are the top trending kala of this week</p>
            </div>
            <div className="bottom">
                {error ? "Asuvidha ke liye khed hai. Kaarya pragati par hai!"
                :(loading  
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id} />))}
            </div>
        </div>
    );
};

export default FeaturedProducts;