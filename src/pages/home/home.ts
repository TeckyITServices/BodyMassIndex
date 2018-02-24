import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';
import { SettingProvider } from '../../providers/setting/setting';
//import { Unit } from '../../../../models/unitOfMeasure';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weight: number;
  height: number;
  heightIn: number;
  bmiResult: number;
  unitOfMeasure = 'imperial';
  weightLabel = 'lb';
  heightFtOrMeterLabel = 'ft';
  heightInOrCmLabel ='in';
  isImperial: boolean;

  constructor(public calculatorProvider: CalculatorProvider, public settingProvider: SettingProvider) {

  }

  ionViewDidLoad() {
    debugger;
    this.setLabels();
  }
  ionViewDidEnter() {
    this.setLabels();
  }


  onkey(event: any) {
    this.bmiResult = this.calculatorProvider.getBMI(this.weight, this.height, this.heightIn);
  }

  setLabels() {
    this.isImperial = this.settingProvider.isImperial();
    this.weightLabel = this.isImperial ? 'lb' : 'kg';
    this.heightFtOrMeterLabel = this.isImperial ? 'ft' : 'm';
    this.heightInOrCmLabel = this.isImperial ? 'in' : 'cm';
  }

}
