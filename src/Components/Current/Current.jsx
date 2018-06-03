import React from 'react'
import './Current.css'

const Current = (props) => {
    const date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = days[date.getDay()]

    const monthDay = date.getDate() > 9
                ? date.getDate()
                : '0' + date.getDate()  

    const month = date.getMonth() > 9
                ? (date.getMonth() + 1) 
                : '0' + (date.getMonth() + 1)
                
    const displayDate = day + ' ' + monthDay + '/' + month
    return (
        <div className="weather-app__current">
            <div className="weather-app__current-text">
                <div className="weather-app__current-date">
                    {displayDate}
                </div>
                <div className="weather-app__current-degree">
                    {parseInt(props.currentTemp, 10)}
                </div>
            </div>
            <div className="weather-app__current-img">
                <img src={'http:' + props.icon} alt="current weather"/>
            </div>
        </div>
    )
}

Current.defaultProps = {
    dt: '00/00',
    temp: '00',
    data: {}
}

export default Current