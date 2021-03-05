import React, { useEffect, useRef, useState } from 'react';
import "./timer.styles.scss";

const Timer = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 14, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        
        // return () => {
        //     clearInterval(interval.current);
        // };
    },[])

    return (
        <div className="sale-cd-timer">
            <ul>
            <li>
                <div className="cd-box">
                    <div className="cd-timer">{timerDays}</div>
                    Ngày
                </div>
            </li>
            <li>
                <div className="cd-box">
                    <div className="cd-timer">{timerHours}</div>
                    Giờ
                </div>
            </li>

            <li>
                <div className="cd-box">
                    <div className="cd-timer">{timerMinutes}</div>
                    Phút
                </div>
            </li>

            <li>
                <div className="cd-box">
                    <div className="cd-timer">{timerSeconds}</div>
                    Giây
                </div>
            </li>
            </ul>
      </div>
    );
};

export default Timer;