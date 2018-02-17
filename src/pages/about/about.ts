import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public month:any;
	 public swipe: number = 0;
	 public brightness:number=0;
	 public gaming:string="";
	 public like=true;
  constructor(public navCtrl: NavController) {

  }
  show(){
  	console.log(this.month)

  }

  goGoogle(){
  	console.log("google click");
  }

  swipeEvent(e) {
    this.swipe++;
    console.log(this.swipe);
    console.log(e);

  }

  onChange(e){
  	console.log(this.gaming);
  }


}
