import React, { useState } from "react";
import './Home.css'
import img from './image/Capture.PNG'
import { FaAngleRight } from "react-icons/fa";
import Categories from "./Categories/Categories";
const Home = () => {
    const [state, setstate] = useState(false);
    const sd = () => {
        setstate(true);
    }
    const hd = () => {
        setstate(false);
    }

    return (
        <>
            <div className="v1"></div>
            <div>
                <img className="img" src={img} alt="abc" />
            </div>
            <div>
                <ul className="list">
                    <div onMouseEnter={sd} onMouseLeave={hd}>
                        <p >Woman's Fashian  <FaAngleRight className="arrow" />

                            {
                                state ? (<ul onMouseEnter={sd} onMouseLeave={hd}>
                                    <p>- A1</p>
                                    <p>- B</p>
                                </ul>) :
                                    null}
                        </p>  </div>
                    <div>
                        <div onMouseEnter={sd} onMouseLeave={hd}>
                            <p>Men's Fashian  <FaAngleRight className="arrow1" />
                                {
                                    state ? (<ul onMouseEnter={sd} onMouseLeave={hd}>
                                        <p>- A</p>
                                        <p>- B</p>
                                    </ul>) :
                                        null}
                            </p></div>
                    </div>
                    <p>Electronics</p>
                    <p>Home & pfestyle</p>
                    <p>Medicine</p>
                    <p>Sports & Outdoor</p>
                    <p>Baby's & Toys</p>
                    <p>Groceries & Pets</p>
                    <p>Health & Beauty</p>

                </ul>
            </div>
            <Categories />

        </>

    )
}
export default Home