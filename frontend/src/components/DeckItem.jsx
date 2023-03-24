import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteDeck } from '../features/decks/deckSlice'

function DeckItem({ deck }) {
    const dispatch = useDispatch()
    return (
        <div>
            <p>{deck.name}</p>
            <button
                onClick={
                    () => dispatch(deleteDeck(deck._id))
                }
                className="close">X
            </button>
        </div>
    )
}

export default DeckItem