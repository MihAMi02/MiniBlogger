import { Component } from '@angular/core';
import { Post } from '../Models/post';
import { PostService } from '../Services/post.service';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-posts-handler',
  templateUrl: './posts-handler.component.html',
  styleUrls: ['./posts-handler.component.css']
})
export class PostsHandlerComponent {
	posts:Post[] = [];
	users:User[] = [];
	
	constructor(private postService:PostService, private userService:UserService){
		this.getPosts();
		this.getUsers();
	}
	
	getPosts(){
		this.postService.getPosts().subscribe(result=>
		{
			this.posts = result.reverse();
		});
	}
	
	getUsers(){
		this.userService.getUsers().subscribe(result=>
		{
			this.users = result;
		});
	}
}
