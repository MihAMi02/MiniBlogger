import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AppModule } from '../app.module';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogueComponent } from '../login-dialogue/login-dialogue.component';
import { SignupDialogueComponent } from '../signup-dialogue/signup-dialogue.component';
import { NewPostDialogueComponent } from '../new-post-dialogue/new-post-dialogue.component';
import { MatDrawer } from '@angular/material/sidenav';
import { ToolbarService } from '../Services/toolbar.service';

@Component({
  selector: 'app-toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.css']
})
export class ToptoolbarComponent {
	
	constructor(private appModule: AppModule, public dialog: MatDialog, private toolbarService: ToolbarService) {}
	
	toggleDrawer() {
        this.toolbarService.toggle();
    }	
	
	get userIsLoggedIn(): boolean {
		return this.appModule.userIsLoggedIn;
	}
	
	logout(): void {
		this.appModule.userIsLoggedIn = false;
	}
	
	openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogueComponent, {
			width: '500px',
			disableClose: true
		});

		dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		});
	}
	
	openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogueComponent, {
			width: '500px',
			disableClose: true
		});

		dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		});
	}
	
	openNewPostDialog(): void {
    const dialogRef = this.dialog.open(NewPostDialogueComponent, {
			width: '700px',
			disableClose: true
		});

		dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		});
	}
}
