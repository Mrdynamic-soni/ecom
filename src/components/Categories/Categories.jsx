import React from 'react'
import { GiSmartphone } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Categories = () => {
    const navigation = useNavigate();
    const options = [
        { id: 0, action: () => { navigation('Timer', { state: { category: 'smartPhones' } }) }, categoryLabel: 'Smart Phones', icon: <GiSmartphone size={"5rem"} /> },
        { id: 1, action: () => { navigation('Timer', { state: { category: 'smartwatches' } }) }, categoryLabel: 'Smart watches', icon: <BsSmartwatch size={"5rem"} /> },
        { id: 2, action: () => { navigation('Timer', { state: { category: 'smartPhones' } }) }, categoryLabel: 'Cameras', icon: <IoCameraSharp size={"5rem"} /> },
        { id: 3, action: () => { navigation('Timer', { state: { category: 'headphones' } }) }, categoryLabel: 'HeadPhones', icon: <FaHeadphones size={"5rem"} /> },
        { id: 4, action: () => { navigation('Timer', { state: { category: 'computers' } }) }, categoryLabel: 'Computers', icon: <RiComputerLine size={"5rem"} /> },
        { id: 5, action: () => { navigation('Timer', { state: { category: 'gaming' } }) }, categoryLabel: 'Gaming', icon: <FaGamepad size={"5rem"} /> }]

    return (
        <div style={{ margin: "0 1.5rem" }}>
            <h5 style={{ color: 'red' }}>Categories</h5>
            <h2>Browse by category</h2>
            <div style={{ display: "flex", overflow: 'scroll', gap: '1rem', margin: "0 1.5rem", }}>
                {options.map(({ id, categoryLabel, icon, action }) => {
                    return (
                        <div onClick={action} key={id} style={{ border: "2px solid black", borderRadius: "0.5rem", padding: " 0.5rem 2rem", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {icon}
                            <p style={{ textAlign: 'center', lineHeight: "1rem" }}>{categoryLabel}</p>
                        </div>)
                })}
            </div>
        </div >
    )
}

export default Categories