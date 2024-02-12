import read from '../modules/reader';
import json from '../modules/parser';

export class GameSaving {
  constructor(id, created, userId, userName, userLevel, userPoints) {
    this.id = id;                        // id сохранения
    this.created = created;              // timestamp создания
    this.userInfo = {};
    this.userInfo.id = userId;           // user id
    this.userInfo.name = userName;       // user name
    this.userInfo.level = userLevel;     // user level
    this.userInfo.points = userPoints;   // user points    
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
    .then(response => {
      return json(response);
    })
    .then(value =>{
      let savingObject = new GameSaving();
      savingObject = JSON.parse(value);
      return savingObject;
    })
  }
}