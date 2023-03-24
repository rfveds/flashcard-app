import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../features/cards/cardSlice'

function CardItem({ card }) {
    const dispatch = useDispatch()
    return (
        <div>
            <p>{card.front}</p>
            <p>{card.back}</p>
            <button
                onClick={
                    () => dispatch(deleteCard(card._id))
                }
                className="close">X
            </button>
        </div>
    )
}

export default CardItem