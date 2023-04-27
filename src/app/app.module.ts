import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { LoginDialogueComponent } from './login-dialogue/login-dialogue.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { config } from './config';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FirestoreModule } from '@angular/fire/firestore';
import { PostService } from './Services/post.service';
import { PostsHandlerComponent } from './posts-handler/posts-handler.component';
import { User } from './Models/user';
import { SignupDialogueComponent } from './signup-dialogue/signup-dialogue.component';
import { CommentComponent } from './comment/comment.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewPostDialogueComponent } from './new-post-dialogue/new-post-dialogue.component';
import { NewCommentDialogueComponent } from './new-comment-dialogue/new-comment-dialogue.component';
import { ProfileSettingsDialogueComponent } from './profile-settings-dialogue/profile-settings-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    ToptoolbarComponent,
    LoginDialogueComponent,
    PostsHandlerComponent,
    SignupDialogueComponent,
    CommentComponent,
    NewPostComponent,
    NewPostDialogueComponent,
    NewCommentDialogueComponent,
    ProfileSettingsDialogueComponent
  ],
  imports: [
	provideFirebaseApp(() => initializeApp(config.firebase)),
	FirebaseAppModule,
	FirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatCardModule,
	MatButtonModule,
	MatDividerModule,
	MatListModule,
	MatToolbarModule,
	MatIconModule,
	MatDialogModule,
	MatFormFieldModule,
	MatSidenavModule,
	MatInputModule,
	MatSnackBarModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	private _userIsLoggedIn:boolean = false;
	private _user:User = new User();
	
	get userIsLoggedIn():boolean {
		return this._userIsLoggedIn;
	}
	
	set userIsLoggedIn(value:boolean) {
		this._userIsLoggedIn = value;
	}
	
	get user():User {
		return this._user;
	}
	
	set user(user:User) {
		this._user = user;
	}
}
