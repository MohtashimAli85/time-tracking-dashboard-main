import React from 'react';
import UserImg from '../images/image-jeremy.png';
import classes from './User.module.css';
const User = (props) => {
    const reportHandler = (event) => {
        // eslint-disable-next-line
        let dId = document.getElementById('daily');
        let wId = document.getElementById('weekly');
        let mId = document.getElementById('monthly');
        if (event.target.id === "daily") dId.classList.add('clicked')
        else dId.classList.remove('clicked');
        if (event.target.id === "weekly") wId.classList.add('clicked')
        else wId.classList.remove('clicked');
        if (event.target.id === "monthly") mId.classList.add('clicked')
        else mId.classList.remove('clicked');

        let daily = event.target.id === "daily" ? true : false;
        let weekly = event.target.id === "weekly" ? true : false;
        let monthly = event.target.id === "monthly" ? true : false;
        props.onTimeFrameClick(daily, weekly, monthly);
    }
    return (

        <div className={classes.card}>
            <div className={classes.cardInfo}>
                <img src={UserImg} alt="" className={classes.user} />
                <div className={classes.info}>
                    <p>Report for</p>
                    <h3>Jeremy Robson</h3>
                </div>
            </div>
            <ul className={classes.reports}>
                <li className="report" id="daily" onClick={reportHandler}>Daily</li>
                <li className="report clicked" id="weekly" onClick={reportHandler}>Weekly</li>
                <li className="report" id="monthly" onClick={reportHandler}>Monthly</li>
            </ul>
        </div>
    )
}

export default User;