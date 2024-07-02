import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                {/* ROW1 starts here */}
                <div className="row">
                    {/* r1 */}
                    <img src="https://i.pinimg.com/originals/37/8a/30/378a308e0d89db685588c03f332d4a43.png" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Vector Art
                        </Link>
                    </button>
                </div>
                {/* row1 ended here */}
                {/* Row 2 starts here */}
                <div className="row">
                    {/* r2 */}
                    <img src="https://s32625.pcdn.co/wp-content/uploads/2015/05/4834.Courbet_2C002D00_The_2D00_Desperate_2D00_Man.jpg.optimal.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Realistic Art
                        </Link>
                    </button>
                </div>
                {/* row2 ended here */}
            </div>
            <div className="col">
                {/* ROW 3 starts here */}
                <div className="row">
                    {/* r3 */}
                    <img src="https://www.koimoi.com/wp-content/new-galleries/2020/09/ileana-dcruz-calls-herself-derpy-dork-head001.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Sketch
                        </Link>
                    </button>
                </div>
                {/* row3 ended here */}
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        {/* row4 starts here */}
                        <div className="row">
                            {/* r4 */}
                            <img src="https://m.media-amazon.com/images/I/91y9IrbmrTL.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Painting
                                </Link>
                            </button>
                        </div>
                        {/* row 4 ended here */}
                    </div>
                    <div className="col">
                        {/* row5 starts here */}
                        <div className="row">
                            {/* r5 */}
                            <img src="https://c4.wallpaperflare.com/wallpaper/404/36/975/abstract-nature-dark-red-wallpaper-preview.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">
                                    Minimal
                                </Link>
                            </button>
                        </div>
                        {/* row5 ended here */}
                    </div>
                </div>
                {/* row 6 starts from here */}
                <div className="row">
                    {/* r6 */}
                    <img src="https://designshifu.com/wp-content/uploads/2022/10/Digital-painting-1024x512.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">
                            Scenery
                        </Link>
                    </button>
                </div>
                {/* row 6 ended here */}
            </div>
        </div>
    );
};

export default Categories;