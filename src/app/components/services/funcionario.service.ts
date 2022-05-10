import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private fireAngular: AngularFirestore
  ) { }

  listarFuncionarios(): Observable<any>{
    return this.fireAngular.collection('funcionario').snapshotChanges();

  }
}
