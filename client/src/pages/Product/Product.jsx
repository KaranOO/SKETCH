import React from 'react';
import "./Product.scss";
import { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()
    const { data, loading, error } = useFetch(
        `/products/${id}?populate=*`);


    return (
        <div className='product'>
            {loading ? ("loading... Please Wait."
            ) : (
                <>
                    <div className="left">
                        <div className="images">
                            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img")} />
                            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img2")} />
                        </div>
                        <div className="mainImg">
                            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className='price'>Rs. {data?.attributes?.price}</span>
                        <p>
                            {data?.attributes?.desc}
                        </p>
                        <div className="quantity">
                            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                            {quantity}
                            <button onClick={() => setQuantity(prev => prev + 1)} >+</button>
                        </div>
                        <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
                        </div>
                        <div className="info">
                            <span >Vendor: {data?.attributes?.vendor}</span>
                            <span>Product Type:  {data?.attributes?.product_type}</span>
                            <span>Tag:  {data?.attributes?.tag}</span>
                        </div>
                        <hr />
                        <div className="info">
                            <span >DESCRIPTION
                                <br />
                                <span className='desc2'>{data?.attributes?.desc2}</span>
                                {/* console.log({data?.attributes?.desc2}); */}
                            </span>
                            <hr />
                            <span >ADDITIONAL INFORMATION
                                <br />
                                <span className='add_info'>{data?.attributes?.add_info}</span>
                            </span>
                            <hr />
                            <span >FAQ
                                <br />
                                <span className='faq'>{data?.attributes?.faq}</span>
                            </span>
                        </div>
                    </div>
                </>)}
        </div>
    );
};

export default Product;