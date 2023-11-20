import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import './App.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './pages/LandingPage'
function App() {


  return (
    <>
    <ToastContainer/>
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/signin' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
