export class User{
	username:string;
	image:string;
	flair:string;
	password:string;
	id:string;
	
	constructor(){
		this.id='';
		this.username = '';
		this.flair = '';
		this.image = 'https://i.stack.imgur.com/YaL3s.jpg';
		this.password = '';
	}
}