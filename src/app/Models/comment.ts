export class Comment{
	content:string;
	postID:number;
	userID:number;
	id:string;
	
	constructor(){
		this.content='';
		this.id='';
		this.postID=0;
		this.userID=0;
	}
}