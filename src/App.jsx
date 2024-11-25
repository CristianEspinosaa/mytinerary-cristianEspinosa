import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cities from './Pages/Cities.jsx'
import Itineraries from './Pages/Itineraries.jsx'
import SignUp from './Pages/Signup.jsx'
import SignIn from './Pages/SignIn.jsx'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {
      path : '/',
      element: <Home/>
    },
    {
      path: '/cities',
      element: <Cities/>
    },
    {
      path: '/itineraries',
      element: <Itineraries/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    },
    {
      path: '/signin',
      element: <SignIn/>
    }
  ])
  return routes
} 


const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
