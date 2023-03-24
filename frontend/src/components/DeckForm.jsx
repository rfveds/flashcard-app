import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createDeck } from '../features/decks/deckSlice'


function DeckForm() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createDeck({
            name,
        }))

        setName('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Deck</label>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type='submit'>Add Deck</button>
                </div>
            </form>
        </section>
    )
}

export default DeckForm