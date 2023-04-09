import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from "./pages/Register"
import Cards from './pages/Cards'
import Decks from './pages/Decks'

/**
 * App component 
 * @returns {JSX} - App component
 */
function App() {
  return (
    <>
    // Router component is used to route to different pages in the app  
      <Router>
        <div className="container">
          // Header component is used to display the header of the app
          <Header />
          // Routes component is used to route to different pages in the app
          <Routes>
            // Route component is used to route to a specific page in the app
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/cards" element={<Cards />}></Route>
            <Route path="/decks" element={<Decks />}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
