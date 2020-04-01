import store from "../store.js";

let _pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000
})

let _sandboxApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/nate/pokemon',
  timeout: 10000
})
class PokemonService {}

constructor() {

  
}








const service = new PokemonService();
export default service;
