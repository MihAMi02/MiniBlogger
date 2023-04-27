import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, doc, setDoc, getFirestore } from '@angular/fire/firestore';
import { Comment } from '../Models/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private fs: Firestore) { }
  
  getComments():Observable<Comment[]>{
	const myCollection:any = collection(this.fs, 'comments');
	return collectionData(myCollection, {idField: 'id'});
  }
  
  addComments(comment:Comment){
	const myCollection = collection(this.fs, 'comments');
	addDoc(myCollection, comment);
  }
}
