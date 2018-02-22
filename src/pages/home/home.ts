import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weight: number;
  heightFt: number;
  heightIn: number;
  bmiResult: number;

  constructor(public navCtrl: NavController) {

  }

  onkey(event: any) {
    debugger;
    console.log(this.weight);
  }

}
