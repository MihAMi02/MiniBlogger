import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup-dialogue',
  templateUrl: './signup-dialogue.component.html',
  styleUrls: ['./signup-dialogue.component.css']
})
export class SignupDialogueComponent {
	username:string = '';
	password:string = '';
	users:User[] = [];

	constructor(private appModule: AppModule, private userService:UserService, private snackBar: MatSnackBar) {
		this.getUsers();
	}
	
	checkUsername(): boolean {
		return this.users.some(user => user.username === this.username);
	}
	
	signup():void  {
		if(!this.checkUsername()){
			console.log(this.users);
			const user = this.users.find(u => u.username === this.username);
			const hash = CryptoJS.SHA256(this.password);
			const maxId = Math.max(...this.users.map(user => parseInt(user.id, 10))) + 1;
			console.log(maxId);
			let newUser = {id: maxId.toString(), username:this.username, flair:'New here', image:'https://i.stack.imgur.com/YaL3s.jpg', password: hash.toString()};
			this.userService.addUsers(newUser, maxId.toString());
			
			this.snackBar.open('User created succesfully.', 'Close', {
				duration: 3000,
			});
		} else {
			this.snackBar.open('Username is already taken.', 'Close', {
				duration: 3000,
			});
		}
	}
	
	getUsers(){
		this.userService.getUsers().subscribe(result=>
		{
			this.users = result;
		});
	}
}
