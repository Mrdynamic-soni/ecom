import React, { useEffect, useState } from "react";
import './Timer.css'
import New1 from "./New1";
import Contact from "./Contact";
const Timer = () => {
    const [days, setdy] = useState(0)
    const [hours, sethr] = useState(0)
    const [minutes, setmin] = useState(0)
    const [seconds, setsec] = useState(0)
    const deadline = "February ,10,2024"
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setdy(Math.floor(time / (1000 * 60 * 60 * 24)))
        sethr(Math.floor(time / (1000 * 60 * 60) % 24))
        setmin(Math.floor((time / 1000 / 60) % 60))
        setsec(Math.floor((time / 1000) % 60))

    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>

            <div className="v2"></div>
            <div className="l1">Today's</div>
            <div className="days1">
                {/* <p className="days"> Days &nbsp;   &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; Hours  &nbsp; &nbsp;  &nbsp;   &nbsp; &nbsp;  Minutes &nbsp;   &nbsp; &nbsp;   &nbsp; Seconds</p>
            <h1 className="time">03 : 23 :  19 : 56</h1> */}
                <div className="time">
                    <div className="days">Days </div>
                    <h1 > {days < 10 ? "0" + days : days}</h1>
                </div>
                <h1 className="colon">:</h1>

                <div className="time">
                    <div  >Hours</div>
                    <h1 >{hours < 10 ? "0" + hours : hours}</h1>
                </div>
                <h1 className="colon">:</h1>
                <div className="time">
                    <div >Minutes</div>
                    <h1 >{minutes < 10 ? "0" + minutes : minutes}</h1>
                </div>
                <h1 className="colon">:</h1>
                <div className="time">
                    <div  >Seconds</div>
                    <h1 >{seconds < 10 ? "0" + seconds : seconds}</h1>
                </div>
            </div>
            <p className="fs">Flash Sales</p>
            <div>
                <section>
                    <New1 />
                    <Contact />
                </section>
            </div>
        </>
    )
}
export default Timer