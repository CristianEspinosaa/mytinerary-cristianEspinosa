import ImgCarusel from "../Components/ImgCarusel.jsx"

const Hero = () => {
    return (
        <main className="bg-[url('../../public/fondo5.jpg')] bg-cover h-screen bg-fixed bg-opacity-80">
  <figure className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-30 px-4">
    <h1 className="mt-32 font-mono font-extrabold text-3xl sm:text-4xl text-sky-200 text-center">
      My tinerary
    </h1>
    <span className="mt-6 mb-6 font-mono font-extrabold text-xl sm:text-2xl md:text-3xl text-white text-center shadow-lg">
      ¡¡ Find your perfect trip, designed by insiders who know and love their cities !!
    </span>
    
    <ImgCarusel />
    
    <button 
      type="button" 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 sm:py-6 md:py-2 px-4 sm:px-10 md:px-12 rounded-full mt-2">
      Explore Now!
    </button>
    
    <img 
      src="../../public/tierra1.png" 
      alt="earth" 
      className="w-32 sm:w-48 md:w-64 mt-2" 
    />
  </figure>
</main>

    )

}

export default Hero