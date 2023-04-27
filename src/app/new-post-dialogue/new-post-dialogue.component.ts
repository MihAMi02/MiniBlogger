import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { Post } from '../Models/post';
import { PostService } from '../Services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-post-dialogue',
  templateUrl: './new-post-dialogue.component.html',
  styleUrls: ['./new-post-dialogue.component.css']
})
export class NewPostDialogueComponent {
	content:string='';
	image:string='';
	posts:Post[] = [];
	
	constructor (private appModule: AppModule, private postService:PostService, private snackBar: MatSnackBar) {
		this.getPosts();
	};
	
	publishPost():void {
		if(this.content.length != 0) {
			const maxId = Math.max(...this.posts.map(post => parseInt(post.id, 10))) + 1;
			console.log(maxId);
			let newPost = {content: this.content, image:this.image, userID:parseInt(this.appModule.user.id), id:maxId.toString()};
			this.postService.addPosts(newPost, maxId.toString());
			this.snackBar.open('Post created.', 'Close', {
				duration: 3000,
			});
		
		} else {
			this.snackBar.open('Post must have content.', 'Close', {
				duration: 3000,
			});
		}
	}
	
	getPosts(){
		this.postService.getPosts().subscribe(result=>
		{
			this.posts = result;
		});
	}
}
