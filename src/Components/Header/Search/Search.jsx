import React from 'react'

import './Search.css'

const Search = (props) => {
    return (
        <div className="weather-app__search">
            <input
                autoFocus
                className="weather-app__search-input"
                type="text"
                onChange={e => props.searchHandler(e)}
                onKeyPress={e => props.onKeySearchToggle(e)}
                onClick={props.searchToggle}
            />
        </div>
    )
}

export default Search