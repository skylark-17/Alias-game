import React, { useRef, useState, useEffect, useContext } from 'react'
import { Context } from '../context';

function Timer(props) {

    let {end_time} = props

    const { setEndedRound } = useContext(Context)

    const [timer, setTimer] = useState("00");

    const Ref = useRef(null);


    const getTimeRemaining = () => {
        const total = end_time - Date.parse(new Date());
        const seconds = Math.floor(total / 1000);
        return {
            total, seconds
        };
    }

    const startTimer = () => {
        console.log("in timer",end_time)
        let { total, seconds }
            = getTimeRemaining();
        if (total >= 0) {
            setTimer(
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            setEndedRound(true)
            clearInterval(Ref.current);
        }
    }
    const clearTimer = () => {
        setTimer("30");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer();
        }, 1000)
        Ref.current = id;
    }
  
    useEffect(() => {
        clearTimer();
    }, []);

    return (
        <div>
            <h2>Осталось времени:</h2>
            <h2>{timer}</h2>
        </div>
    )
}

export default Timer;