import React, { useEffect, useState } from 'react'

export default function TrafficLight() {
    // traffic light should red should glow for 5sec, yellow for 2sec, greens should glow for 5 sec
    let [Rlights, setRLights] = useState(true);
    let [Glights, setGLights] = useState(false);
    let [Ylights, setYLights] = useState(false);
    const [time, setTime] = useState(0)

    let ord = 3
    let [order, setOrder] = useState(ord)

    useEffect(() => {
        let timer
        if (order === 1) {
            setRLights(true);
            setGLights(false)
            setYLights(false)

            timer = setTimeout(() => {
                setOrder(ord)
            }, 3000);

        } else if (order === 2) {
            setRLights(false);
            setGLights(false)
            setYLights(true)

            timer = setTimeout(() => {
                setOrder(ord -1)
            }, 1000);


        } else if (order === 3) {
            setRLights(false);
            setGLights(true)
            setYLights(false)

            timer = setTimeout(() => {
                setOrder(ord - 2)
            }, 3000);
        }

        () => {
            clearInterval(timer)
        }


    }, [order, ord]);



    return (
        <div>
            <div style={{ border: "1px solid white", padding: '10px', borderRadius: "10px" }}>
                <div className='lights' style={{ backgroundColor: Rlights ? "red" : "gray" }} > </div>
                <div className='lights' style={{ backgroundColor: Ylights ? "yellow" : "gray" }} ></div>
                <div className='lights' style={{ backgroundColor: Glights ? "green" : "gray" }} ></div>

            </div>


        </div>
    )
}
