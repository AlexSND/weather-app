import React from 'react'

import './Header.css'

import searchIcon from './img/search-icon.svg'

import Location from './Location/Location'
import Search from './Search/Search'

const Header = (props) => {
    return (
        <header className="weather-app__header">
            {props.search 
                ? <Search
                    searchHandler={props.searchHandler}
                    locationName={props.locationName}
                    onKeySearchToggle={props.onKeySearchToggle}
                    searchToggle={props.searchToggle}
                />
                : <Location
                    locationName={props.locationName}
                    searchToggle={props.searchToggle}
                />
            }
            <div className="weather-app__search-icon" onClick={props.searchToggle}>
                <img src={searchIcon} alt="search"/>
            </div>       
        </header>
    )
}

export default Header