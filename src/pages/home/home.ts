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
  bmiResult: number = 0.00;
  bmiDescription: string = '';
  unitOfMeasure = 'imperial';
  weightLabel = 'lb';
  heightFtOrMeterLabel = 'ft';
  heightInOrCmLabel = 'in';
  isImperial: boolean;

  constructor(public calculatorProvider: CalculatorProvider, public settingProvider: SettingProvider) {

  }

  ionViewDidLoad() {
    this.setLabels();
  }
  ionViewDidEnter() {
    this.setLabels();
  }


  onkey(event: any) {
    this.bmiResult = this.calculatorProvider.getBMI(this.weight, this.height, this.heightIn);
    this.setDescription();
  }

  setLabels() {
    this.isImperial = this.settingProvider.isImperial();
    this.weightLabel = this.isImperial ? 'lb' : 'kg';
    this.heightFtOrMeterLabel = this.isImperial ? 'ft' : 'm';
    this.heightInOrCmLabel = this.isImperial ? 'in' : 'cm';
  }

  // Underweight = <18.5
  // Normal weight = 18.5–24.9 
  // Overweight = 25–29.9 
  // Obesity = BMI of 30 or greater
  setDescription() {
    if (this.bmiResult < 18.5) {
      this.bmiDescription = 'Underweight';
    } else if (this.bmiResult >= 18.5 && this.bmiResult <= 24.9) {
      this.bmiDescription = 'Normal weight!';
    } else if (this.bmiResult >= 25 && this.bmiResult <= 29.9) {
      this.bmiDescription = 'Overweight!';
    } else if (this.bmiResult >= 30) {
      this.bmiDescription = 'Obese!';
    }
  }

}
