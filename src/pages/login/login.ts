import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoadingController} from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	demo = 'Profile';
	data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
  	//this.navCtrl.setRoot(LoginPage);		
  }

  
  loadUser(){
  	let loader = this.loadingCtrl.create({
  		spinner: 'bubbles',
      	content: 'Loading Data...',
      	//duration: 800
  	});
  	loader.present().then(() => { this.http.get('https://randomuser.me/api/').map(res => res.json()).subscribe(res => {
        		this.data = res.results;
    		},err => {
    			console.log(err);
    	});
  		loader.dismiss();
    });
  }

  goBack(){
  	this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
  	this.loadUser();
    console.log('ionViewDidLoad LoginPage');
  }

}
