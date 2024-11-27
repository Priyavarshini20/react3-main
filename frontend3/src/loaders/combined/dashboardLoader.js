import recipesLoader from "../units/recipesLoader";

const dashboardLoader = async () => {
    try {
        // use the unit loaders to fetch the data
        const recipes = await recipesLoader();

        // return the data
        return {
            recipes
        };
    } catch (error) {
        return null;
    }
}

export default dashboardLoader;