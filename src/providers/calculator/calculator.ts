import { Injectable } from '@angular/core';
import { SettingProvider } from '../setting/setting';



@Injectable()
export class CalculatorProvider {
  private factor: number = 703;
  private bmiResult: number;

  constructor(private settingProvider: SettingProvider) {
    console.log('Hello CalculatorProvider Provider');
  }

  // Formula: weight (lb) / [height (in)]2 x 703
  // Calculation: [weight (lb) / height (in) / height (in)] x 703
  getBMI(weight: number, height: number, heightIn: number, unit: string = 'imperial'): number {
    try {
      if (!this.settingProvider.isImperial()) {
        height = this.mToft(height);
        weight = this.kgTolb(weight);
        heightIn = this.cmToIn(heightIn);
      }

      let powOf2Height = Math.pow(+height * 12 + +heightIn, 2);
      this.bmiResult = (+weight / powOf2Height) * this.factor;
    } catch (error) {
      console.log(error);
    }

    return +this.bmiResult.toFixed(2);
  }

  kgTolb(value): number {
    return value * 2.20462;
  }

  mToft(value) {
    return value * 3.28084;
  }

  cmToIn(value): number {
    return value * 0.393701;
  }

}
