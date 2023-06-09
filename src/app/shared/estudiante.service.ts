import { Injectable } from '@angular/core';
import {Estudiante }from '../shared/Estudiante'
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = this.db.list('/estudiante')  ////aqui
  }

  // ---------------------------  Crear  ---------------------------\\
  createBooking(est: Estudiante) {
    return this.bookingListRef.push({
      name: est.name,
      last_name: est.last_name,
      nota1: est.nota1,
      nota2: est.nota2,
      nota3: est.nota3,
      nota4: est.nota4,
      nota5: est.nota5,
      total: est.total,
  
    
    });
  }
  // ---------------------------  Metodo Get --------------------------- \\
  getBooking(id: string) {
    this.bookingRef = this.db.object('/estudiante/' + id);
    return this.bookingRef;
  }

  // ---------------------------  Metodo Get List --------------------------- \\

  getBookingList() {
    this.bookingListRef = this.db.list('/estudiante');
    return this.bookingListRef;
  }

  // ---------------------------  Metodo Editar --------------------------- \\
  
  updateBooking(id, est: Estudiante) {
    return this.bookingRef.update({
      name: est.name,
      last_name: est.last_name,
      nota1: est.nota1,
      nota2: est.nota2,
      nota3: est.nota3,
      nota4: est.nota4,
      nota5: est.nota5,
      total: est.total,
    });
  }


  // ---------------------------  Metodo Eliminar  --------------------------- \\
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/estudiante/' + id);
    this.bookingRef.remove();
  }
  
}
