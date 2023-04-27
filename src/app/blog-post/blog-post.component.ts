import { Component, Input } from '@angular/core';
import { AppModule } from '../app.module';
import { Post } from '../Models/post';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { Comment } from '../Models/comment';
import { CommentService } from '../Services/comment.service';
import { NewCommentDialogueComponent } from '../new-comment-dialogue/new-comment-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
	@Input() post!: Post;
	@Input() user!: User;
	
	hasPhoto:boolean = true;
	isExpanded:boolean = false;
	isTooLong:boolean = false;
	maxContentLength = 500;
	users:User[] = [];
	comments:Comment[] = [];
	
  
	constructor(private appModule: AppModule, private userService:UserService, private commentService:CommentService, public dialog: MatDialog) {
		this.getComments();
		this.getUsers();
	}
	
	ngOnInit() {
		this.hasPhoto = this.post.image.length !== 0;
	}
	
	get userIsLoggedIn(): boolean {
		return this.appModule.userIsLoggedIn;
	}
	
	isContentTooLong(content: string) {
		this.isTooLong = content.length > this.maxContentLength;
	}
	
	showMore() {
		this.isExpanded = true;
	}
	
	showLess() {
		this.isExpanded = false;
	}
	
	getUsers(){
		this.userService.getUsers().subscribe(result=>
		{
			this.users = result;
		});
	}
	
	getComments(){
		this.commentService.getComments().subscribe(result=>
		{
			this.comments = result.filter(comment => comment.postID.toString() === this.post.id);
		});
		console.log(this.comments);
	}
	
	openCommentDialog(): void {
    const dialogRef = this.dialog.open(NewCommentDialogueComponent, {
			width: '500px',
			disableClose: true,
			data: {
				postID: parseInt(this.post.id),
				userID: parseInt(this.user.id)
			}
		});

		dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		});
	}
}
