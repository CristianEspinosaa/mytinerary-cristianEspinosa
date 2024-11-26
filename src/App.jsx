import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cities from './Pages/Cities.jsx'
import Itineraries from './Pages/Itineraries.jsx'
import SignUp from './Pages/Signup.jsx'
import SignIn from './Pages/SignIn.jsx'
import './App.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions/authActions.js'

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

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("localhost:8080/api/users/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data.response

  } catch (error) {
    console.log(error);
    
  }
}


const App = () => {
  const dispach = useDispatch(setUser)
  let token = localStorage.getItem("token")

  if (token) {
    loginWithToken(token).then((user) => {
      dispach(setUser({user, token}))
    })
  }

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
