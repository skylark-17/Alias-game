import React, { useRef, useState, useEffect, useContext } from 'react'
import { EndTimeContext, StartedContext } from '../context';

function Timer() {

    const { setStarted } = useContext(StartedContext)

    let end_time = null

    const [timer, setTimer] = useState("00");

    const Ref = useRef(null);

    const getTimeRemaining = () => {
        const row = localStorage.getItem('end_time')
        end_time = JSON.parse(row)
        const total = end_time - Date.parse(new Date());
        const seconds = Math.floor(total / 1000);
        return {
            total, seconds
        };
    }

    const startTimer = () => {
        let { total, seconds }
            = getTimeRemaining();
        if (total >= 0) {
            setTimer(
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            localStorage.setItem('started', JSON.stringify(false))
            setStarted(false)
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

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    return (
        <div>
            <h2>Осталось времени:</h2>
            <h2>{timer}</h2>
        </div>
    )
}

export default Timer;