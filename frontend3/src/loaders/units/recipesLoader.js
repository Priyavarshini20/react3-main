import recipeServices from "../../services/recipeServices";

const recipesLoader = async () => {
    try {
        // call a service to fetch the data
        const response = await recipeServices.getRecipes();

        // return the data
        return response.data;
    } catch (error) {
        return null;
    }
}

export default recipesLoader;