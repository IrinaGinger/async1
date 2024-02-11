import GameSavingLoader from './classes/gamesavingloader'

export default function savingLoader() {
  return GameSavingLoader.load()
  .then(saving => {
    return saving;
  }, 
  error => {
    return error;
  }); 
}