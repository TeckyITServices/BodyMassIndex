import { Injectable } from '@angular/core';

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingProvider {

  constructor() {
    console.log('Hello SettingProvider Provider');
  }

  isImperial(): boolean {
    return localStorage.getItem('isImperial') == 'true' ? true : false;
  }

  setUnit(isImperial: boolean) {
    localStorage.setItem('isImperial', `${isImperial}`);
  }

}
