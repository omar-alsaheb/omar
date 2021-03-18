import { API_URL } from "./config";
import { getJSON } from "./helper";

export const state = {
    recipe: {},
    search: {
        qurey: '',
        results: [],

    },

};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`);

        const { recipe } = data.data
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            img: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }
        // console.log(state.recipe)
    }

    catch (err) {
        console.log(err)
        throw err;
    }
};

export const loadSearchResults = async function (query) {

    try {
        // state.search.qurey = query;
        const data = await getJSON(`${API_URL}/?search=${query}`);
        // console.log(data);
        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                img: rec.image_url,
                

            }

        });
    }

    catch (err) {
        console.log(err)
        throw err;
    }
}

