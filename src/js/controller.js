import icons from 'url:../img/icons.svg';
import * as model from './model.js'
import recpieView from './views/recipeView.js'

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
  }
};

const init = function () {
  recpieView.addHandlerRender(showRecpie);
}

init();
// ['hashchange','load'].forEach(function(ev){
// addEventListener(ev,showRecpie)

// })
// window.addEventListener(eventListner, showRecpie)

// window.addEventListener('load',showRecpie)
