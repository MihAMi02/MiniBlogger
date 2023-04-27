import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ToolbarService } from './Services/toolbar.service';
import { AppModule } from './app.module';
import { User } from './Models/user';
import { ProfileSettingsDialogueComponent } from './profile-settings-dialogue/profile-settings-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'miniblog';
	
	constructor(private appModule: AppModule, private toolbarService: ToolbarService, public dialog: MatDialog) { }
	
	@ViewChild('drawer') public drawer!: MatDrawer;

    ngAfterViewInit() {
        this.toolbarService.setDrawer(this.drawer);
		console.log(this.drawer);
    }
	
	get userIsLoggedIn(): boolean {
		return this.appModule.userIsLoggedIn;
	}
	
	get user(): User {
		return this.appModule.user;
	}
	
	isDrawerOpen:boolean = false;
	showFiller:boolean = false;

	onToggleDrawer(): void {
		this.isDrawerOpen = !this.isDrawerOpen;
	}
	
	openSettingsDialog(): void {
    const dialogRef = this.dialog.open(ProfileSettingsDialogueComponent, {
			width: '500px',
			disableClose: true
		});

		dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		});
	}
}
