import icons from 'url:../img/icons.svg';
import * as model from './model.js'
import recipeView from './views/recipeView.js';
import recpieView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';



const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecpie = async function () {
  try {

    let id = window.location.hash.slice(1);
    if (!id) return;

    await model.loadRecipe(id);
    // const {recipe} = model.state;

    recpieView.render(model.state.recipe);

  }
  catch (err) {
    console.log(err)
    recipeView.renderError()
  }
};


const controlerSearchResults = async function () {
  try {
   
    const query = searchView.getQuery();
    if(!query) return;
    await model.loadSearchResults(query)
    // console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  }
  catch (err) {
    console.log(err)
    recipeView.renderError()
  }

}

const init = function () {
  recpieView.addHandlerRender(showRecpie);
  searchView.addHandlerSearch(controlerSearchResults)
}

init();




// ['hashchange','load'].forEach(function(ev){
// addEventListener(ev,showRecpie)

// })
// window.addEventListener(eventListner, showRecpie)

// window.addEventListener('load',showRecpie)
