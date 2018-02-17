import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-menu',
  templateUrl: 'add-menu.html',
})
export class AddMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMenuPage');
  }

  saveItem() {

    let newItem = {
      ItemName: this.ItemName,
      ItemPrice: this.ItemPrice,
      ItemCategory: this.ItemCategory,
      ItemPhoto: this.ItemPhoto,
      ItemDescription: this.ItemDescription
    };

    this.view.dismiss(newItem);

  }

  close() {
  	this.view.dismiss();
  }

}
