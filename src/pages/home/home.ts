import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') user;
	@ViewChild('password') pass;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  login(){
  	//console.log(this.user.value, this.pass.value);
  	if(this.user.value=="user" && this.pass.value=="user"){
  		console.log("Successful Login");
  		this.navCtrl.push(LoginPage);
	}
	else{
		let alert = this.alertCtrl.create({
      	title: 'Login Failed',
      	subTitle: 'Please enter correct username or password',
      	buttons: ['OK']
    	});
    	alert.present();
	}

 }

}
