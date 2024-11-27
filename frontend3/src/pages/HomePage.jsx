const HomePage = () => {
    return (
        <div className="container mt-5 text-center">
            <h1
                className="text-4xl text-gray-800"
            >Welcome to the Recipe Portal</h1>
            <h3
                className="text-2xl text-gray-600"
            >Find your dream Recipe</h3>

            <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                <h2
                    className="text-2xl text-gray-800"
                >
                    You can search for recipes, apply for recipes, and post recipes.
                </h2>
            </div>
        </div>
    )
}

export default HomePage;