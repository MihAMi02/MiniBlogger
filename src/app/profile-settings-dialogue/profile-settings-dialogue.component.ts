import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile-settings-dialogue',
  templateUrl: './profile-settings-dialogue.component.html',
  styleUrls: ['./profile-settings-dialogue.component.css']
})
export class ProfileSettingsDialogueComponent {
	username:string;
	flair:string;
	image:string;
	
	constructor(private appModule: AppModule, private userService:UserService) {
		this.flair = this.appModule.user.flair;
		this.username = this.appModule.user.username;
		this.image = this.appModule.user.image;
	}
	
	updateUser(){
		let update = {flair:this.flair, image:this.image};
		this.appModule.user.flair = this.flair;
		this.appModule.user.image = this.image;
		this.userService.updateUser(this.appModule.user.id, update);
	}
}
