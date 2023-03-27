import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Flashdeck Dashboard</p>
      </section>
    </>
  )
}

export default Dashboard