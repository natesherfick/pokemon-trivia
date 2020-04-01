import PokemonService from "../Services/PokemonService.js";
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
export default class PokemonController {
  constructor() {
    store.subscribe("values", _draw);
  }
}
