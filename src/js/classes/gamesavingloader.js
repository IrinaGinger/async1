import read from '../modules/reader';
import json from '../modules/parser';

export default class GameSavingLoader {
  static load() {
    return read()
    .then(response => {
      return json(response);
    })
    .then(value => JSON.parse(value));
  }
}