import NavBar from '../Components/NavBar.jsx'
import Hero from '../Components/Hero.jsx'
import CallToAction from '../Components/CallToAction.jsx'
import Carrusel from '../Components/Carrusel.jsx'
import Footer from '../Components/Footer.jsx'

const Home = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Hero></Hero>
            <CallToAction></CallToAction>
            <Carrusel></Carrusel>
            <Footer></Footer>
        </div>
    )
}

export default Home