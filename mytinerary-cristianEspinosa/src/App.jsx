import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cities from './Pages/Cities.jsx'
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
