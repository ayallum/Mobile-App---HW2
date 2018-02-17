import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	username;
	password;
	public languages=["Go","C++","Python"];
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {

  }

   show(argument) {
  	console.log(this.username);
  	console.log(this.password);
  }

  loaddefaultuser(){
  	var user="boby";
  	var password1="dddd";
  	this.username=user;
  	this.password=password1;

  	let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    

  }
  clicked(){
  	 let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
