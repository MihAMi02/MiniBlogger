import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, doc, setDoc, getFirestore } from '@angular/fire/firestore';
import { Post } from '../Models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private fs: Firestore) { }
  
  getPosts():Observable<Post[]>{
	const myCollection:any = collection(this.fs, 'posts');
	return collectionData(myCollection, {idField: 'id'});
  }
  
  addPosts(post:Post, id:string){
	const docRef = doc(this.fs, 'posts', id);
	setDoc(docRef, post);
  }
}
