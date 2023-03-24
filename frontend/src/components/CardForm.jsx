import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCard } from '../features/cards/cardSlice'


function CardForm() {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createCard({
            front,
            back,
        }))

        setFront('')
        setBack('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="front">Card</label>
                    <input type="text" name='front' value={front} onChange={(e) => { setFront(e.target.value) }} />
                    <input type="text" name='back' value={back} onChange={(e) => { setBack(e.target.value) }} />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type='submit'>Add Card</button>
                </div>
            </form>
        </section>
    )
}

export default CardForm