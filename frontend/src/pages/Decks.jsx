import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DeckForm from '../components/DeckForm'
import DeckItem from '../components/DeckItem'
import Spinner from '../components/Spinner'
import { getDecks, reset } from '../features/decks/deckSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { decks, isLoading, isError, message } = useSelector(
    (state) => state.decks
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getDecks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Flashdeck Dashboard</p>
      </section>

      <DeckForm />

      <section className='content'>
        {decks.length > 0 ? (
          <div className='decks'>
            {decks.map((deck) => (
              <DeckItem key={deck._id} deck={deck} />
            ))}
          </div>
        ) : (
          <h3>You have not set any decks</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard