import React from 'react'
import './listItem.css'


function ListItem(props) {
    const { movie } = props
    return (
        <div className='List-Item'>
            <p>{movie.title}</p>
        </div>)
}

export default ListItem