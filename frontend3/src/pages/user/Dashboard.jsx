import { Link, useLoaderData } from "react-router-dom";

const Dashboard = () => {

    const { recipes } = useLoaderData();

    return (
        <div>
            <h1
                className="text-3xl font-bold text-gray-800"
            >Dashboard</h1>

            <div className="flex justify-between mt-8">
                <Link to="/dashboard/jobs" className="bg-blue-400 p-4 rounded-lg">
                    <div className="bg-blue-400 p-4 rounded-lg">
                        <h2 className="text-2xl font-bold text-white">{recipes.length}</h2>
                        <p className="text-white">Recipes Available</p>
                    </div>
                </Link>
                <Link to="/dashboard/applied" className="bg-green-400 p-4 rounded-lg">
                    <div className="bg-green-400 p-4 rounded-lg">
                        <h2 className="text-2xl font-bold text-white">0</h2>
                        <p className="text-white">Recipes Applied</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;