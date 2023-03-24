import React from 'react'

function CardItem(card) {
    return (
        <div className='card'>
            <p>{card.front}</p>
            <p>{card.back}</p>
        </div>
    )
}

export default CardItem