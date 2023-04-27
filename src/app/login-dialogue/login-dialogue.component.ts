import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login-dialogue',
  templateUrl: './login-dialogue.component.html',
  styleUrls: ['./login-dialogue.component.css']
})
export class LoginDialogueComponent {

	username:string = '';
	password:string = '';
	users:User[] = [];

	constructor(private appModule: AppModule, private userService:UserService) {
		this.getUsers();
	}
	
	login():void  {
		const user = this.users.find(u => u.username === this.username);
		const hash = CryptoJS.SHA256(this.password);
		if(user){
			console.log(user.username);
			console.log(user.password);
			console.log(hash.toString());
		}
		if(user && user.username === this.username && user.password === hash.toString()){
			this.appModule.userIsLoggedIn = true;
			this.appModule.user = user;
		}
	}
	
	getUsers(){
		this.userService.getUsers().subscribe(result=>
		{
			this.users = result;
		});
	}
}
