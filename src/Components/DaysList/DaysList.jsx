import React from 'react'
import './DaysList.css'
import Day from '../Day/Day'

const DaysList = (props) => {
    if(props.weekForecast !== {}) {
        const DaysListElements = props.weekForecast.map((itemdata) => 
        <li key={itemdata.date_epoch}>
            <Day data={itemdata} />
        </li>)
        return (
            <ul className="weather-app__day-list">
                {DaysListElements}
            </ul>    
        )
    }
}
    


Day.defaultProps = {
    data: {}
}

export default DaysList