import { useLoaderData } from "react-router-dom";

const Recipes = () => {

    const recipes = useLoaderData();

    return (
        <div className="container">
            {/* show each of the recipe as a tailwind styled card */}
            {recipes.map((recipe) => (
                <div key={recipe._id} className="bg-white shadow-md rounded p-8 m-4">
                    <h2 className="text-2xl font-bold text-gray-800">{recipe.title}</h2>
                    <p className="text-gray-600">{recipe.description}</p>
                    <p className="text-gray-600">{recipe.company}</p>

                    <div
                        className="flex items-center mt-4"
                    >
                        <span className="material-symbols-outlined">
                            location_on
                        </span>

                        <span className="text-gray-600">{recipe.location}</span>
                    </div>

                    <div
                        className="flex items-center mt-4"
                    >
                        <span className="material-symbols-outlined">
                            attach_money
                        </span>

                        <span className="text-gray-600">{recipe.salary}</span>
                    </div>

                    <div className="mt-4">
                        {recipe.skills.map((skill) => (
                            <span key={skill} className="bg-gray-200 text-gray-800 text-sm p-2 m-1 rounded">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Recipes;