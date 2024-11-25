const CallToAction = () => {
    return (
        <main className="flex items-center justify-center h-96 bg-gray-100">
        <article className="bg-green-200 w-full max-w-md p-6 rounded-lg shadow-lg flex flex-col gap-4 text-center mx-4">
          <h3 className="text-2xl font-bold text-gray-900">Find the perfect destination</h3>
          <p className="text-gray-800">
            Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
          </p>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition-all duration-300 transform hover:scale-105"
          >
            Click Here!
          </button>
        </article>
      </main>
      
    )
}

export default CallToAction