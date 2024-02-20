import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import { FaEye, FaHeart } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


const Cart = () => {

    const { cartItems } = useSelector(state => state.cartSlice)
    return (
        <div>
            <p>All the Items in Your cart are availble here</p>
            {cartItems?.length === 0 ? <div>No ITems Added TO cart</div> : <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                {
                    cartItems.map((item, id) => {
                        return (
                            <div key={id} style={{ margin: "0 1rem", position: 'relative' }}>
                                <img src={item.img} style={{ width: 200, height: 100 }} />
                                <h6>{item.name}</h6>
                                <span style={{ position: 'absolute', top: 0, right: 0, padding: "0.5rem", borderRadius: '0.5rem', backgroundColor: 'red' }}>
                                    <MdDelete color="#fff" />
                                </span>
                            </div>

                        )
                    })
                }
            </div>}
        </div>
    )
}

export default Cart

// img: '/img1.PNG',
// name: 'HAVIT HV-G92 Gamepad',
// prize: '$120   $160',
// btn: '-40%',
// num: '(88)',
// star: 