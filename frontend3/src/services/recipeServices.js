import instance from './instance';

const recipeServices = {
    getRecipes: async () => {
        return await instance.get('/Recipes');
    }
}

export default recipeServices;