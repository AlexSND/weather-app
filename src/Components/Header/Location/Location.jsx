import React from 'react'

import './Location.css'

const Location = (props) => {
    return (
        <header className="weather-app__location" onClick={props.searchToggle}>
            {props.locationName}
        </header>
    )
}

export default Location