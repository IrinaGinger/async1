import GameSavingLoader from './classes/gamesaving'

export default function savingLoader() {
  return GameSavingLoader.load()
  .then(saving => {
    return saving;
  }, 
  error => {
    return error;
  }); 
}