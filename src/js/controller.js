import icons from 'url:../img/icons.svg';
import * as model from './model.js'
import recpieView from './views/recipeView.js'
const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    alert(err)
  }
};
['hashchange', 'load'].forEach(ev => addEventListener(ev, showRecpie));

// ['hashchange','load'].forEach(function(ev){
// addEventListener(ev,showRecpie)

// })
// window.addEventListener(eventListner, showRecpie)

// window.addEventListener('load',showRecpie)


console.log("asdasd")