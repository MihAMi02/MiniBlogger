import { Component, Input } from '@angular/core';
import { AppModule } from '../app.module';
import { User } from '../Models/user';
import { Comment } from '../Models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
	@Input() user!: User;
	@Input() comment!: Comment;
	
	constructor() {
	}
}
