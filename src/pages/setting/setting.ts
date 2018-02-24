import { Component } from '@angular/core';
import { SettingProvider } from '../../providers/setting/setting';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

export class SettingPage {
  private imperial: boolean = true;
  private metric: boolean = false;
  private isImperial: boolean = true;

  constructor(private settingProvider: SettingProvider) {
    this.isImperial = this.settingProvider.isImperial();
    this.setUnit(this.isImperial);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  setUnit(isImperial: string | boolean) {

    if (isImperial === 'imperial' || isImperial == true) {
      this.imperial = true;
      this.metric = false;
    } else {
      this.imperial = false;
      this.metric = true;
    }
    this.settingProvider.setUnit(this.imperial);
  }
}
