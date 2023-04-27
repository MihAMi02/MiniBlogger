import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from '../Services/comment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppModule } from '../app.module';

export interface DialogData {
  userID:number;
  postID:number;
}

@Component({
  selector: 'app-new-comment-dialogue',
  templateUrl: './new-comment-dialogue.component.html',
  styleUrls: ['./new-comment-dialogue.component.css']
})
export class NewCommentDialogueComponent {
	content:string = '';
	
	constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private appModule: AppModule, private commentService:CommentService, private snackBar: MatSnackBar) {}
	
	publishComment():void {
		if(this.content.length != 0) {
			let newComment = {content: this.content, postID:this.data.postID, userID:parseInt(this.appModule.user.id), id:''};
			this.commentService.addComments(newComment);
			this.snackBar.open('Comment created.', 'Close', {
				duration: 3000,
			});
		
		} else {
			this.snackBar.open('Comment must have content.', 'Close', {
				duration: 3000,
			});
		}
	}
}
