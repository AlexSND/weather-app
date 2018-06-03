import React from 'react'
import './Day.css'

const Day = (props) => {
    const date = new Date(props.data.date)
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const day = days[date.getDay()]

    const monthDay = date.getDate() > 9
                ? date.getDate()
                : '0' + date.getDate()  

    const month = date.getMonth() > 9
                ? (date.getMonth() + 1) 
                : '0' + (date.getMonth() + 1)
                
    const displayDate = monthDay + '/' + month

    return (
        <div className="weather-app__day">
            <div className="weather-app__day-info">
                <div className="weather-app__day-name">
                    {day}
                </div>
                <div className="weather-app__day-date">
                    {displayDate}
                </div>
            </div>
            <div className="weather-app__day-temperature">
                <div className="weather-app__day-degrees">
                    {props.data.day.maxtemp_c}
                </div>
                <div className="weather-app__day-weather-icon">
                    <img src={'https:' + props.data.day.condition.icon} alt=""/>
                </div>
            </div>
        </div>
    )
}

Day.defaultProps = {
    day: "mon",
    data: {},
    temp: "?"
}

export default Day