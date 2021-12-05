import React from 'react';
import classes from './Report.module.css';
import data from '../data.json';
import dotIcon from '../images/icon-ellipsis.svg';
const Report = props => {


    return (
        <div className='details'>
            {data.map(e => (
                <div className={`${e.title} card`} key={e.title}>
                    <div className={`${e.title}Bg bg`}></div>
                    <div className={classes.info}>
                        <div className={`${classes.title} ${classes.dFlex}`}>
                            <h4>{e.title}</h4>
                            <img src={dotIcon} alt="" className={classes.icon} />
                        </div>
                        {props.timeFrame.daily ? <div className={`${classes.time} ${classes.dFlex}`}>
                            <h3>{`${e.timeframes.daily.current}hrs`}</h3>
                            <p className={classes.msg}>{`Last day - ${e.timeframes.daily.previous}hrs`}</p>
                        </div> : ''}
                        {props.timeFrame.weekly ? <div className={`${classes.time} ${classes.dFlex}`}>
                            <h3>{`${e.timeframes.weekly.current}hrs`}</h3>
                            <p className={classes.msg}>{`Last week - ${e.timeframes.daily.previous}hrs`}</p>
                        </div> : ''}
                        {props.timeFrame.monthly ? <div className={`${classes.time} ${classes.dFlex}`}>
                            <h3>{`${e.timeframes.monthly.current}hrs`}</h3>
                            <p className={classes.msg}>{`Last month - ${e.timeframes.daily.previous}hrs`}</p>
                        </div> : ''}
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Report;