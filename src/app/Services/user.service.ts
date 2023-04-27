import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, doc, setDoc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: Firestore) { }
  
  getUsers():Observable<User[]>{
	const myCollection:any = collection(this.fs, 'users');
	return collectionData(myCollection, {idField: 'id'});
  }
  
  addUsers(user:User, id:string){
	const docRef = doc(this.fs, 'users', id);
	setDoc(docRef, user);
  }
  
  updateUser(id: string, data: any) {
    const docRef = doc(this.fs, 'users', id);
    updateDoc(docRef, data);
  }
}
