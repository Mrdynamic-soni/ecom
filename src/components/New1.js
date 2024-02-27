import React, { useEffect, useState } from "react";
import './New1.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItems } from "../util/redux/slices/cartSlice";
import { useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";
import { categoryData } from "../util/dummystore/dataByCategory";



const New1 = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartSlice)
    const addTocart = (item) => {
        dispatch(updateCartItems(item))

    }

    console.log(location?.state?.category);





    const [data, setData] = useState(
        [
            {
                img: '/img1.PNG',
                name: 'HAVIT HV-G92 Gamepad',
                prize: '$120   $160',
                btn: '-40%',
                num: '(88)',
                star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

            },
            {
                img: '/img2.PNG',
                name: 'AK-900 Wired Keyboard',
                prize: '$960   $1160',
                btn: '-35%',
                num: '(75)',
                star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gray" /></>


            },
            {
                img: '/img3.PNG',
                name: 'IPS LCD Gaming Monitor',
                prize: '$370 $400',
                btn: '-30%',
                num: '(99)',
                star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

            },
            {
                img: '/img4.PNG',
                name: 'S-Series Comfort Chair',
                prize: '$375  $400',
                btn: '-25%',
                num: '(99)',
                star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
            },
            {
                img: '/img1.PNG',
                name: 'HAVIT HV-G92 Gamepad',
                prize: '$120   $160',
                btn: '-40%',
                num: '(88)',
                star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /></>

            },
            {
                img: '/img4.PNG',
                name: 'S-Series Comfort Chair',
                prize: '$375  $400',
                btn: '-25%',
                num: '(99)',
                star: <><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar color="gold" /><FaStar /></>
            }
        ])


    useEffect(() => {
        if (location?.state?.category) {
            const category = categoryData[location?.state?.category];
            setData(category)
        }
    }, [location.state])



    return (
        <>
            <div className="slider-container" >
                <div
                    style={{
                        display: 'flex',
                        overflow: 'scroll'
                    }}> {
                        data.map((item, id) => (
                            <div key={id} style={{ margin: "0 1rem", position: 'relative' }}>
                                <img src={item.img} style={{ width: 200, height: 100 }} />
                                <h6>{item.name}</h6>
                                <span style={{ position: 'absolute', top: 0, right: 0, padding: "0.5rem", borderRadius: '0.5rem', backgroundColor: 'red' }}>
                                    <FaEye color="#fff" style={{ marginRight: "1rem" }} />
                                    <FaHeart color="#fff" onClick={() => addTocart(item)} />
                                </span>
                            </div>

                        ))}
                </div>
            </div>
            <div>
                <button className="button" onClick={() => {
                    alert('View all products')
                }}>View All Products</button>

            </div>
        </>
    );
}
export default New1