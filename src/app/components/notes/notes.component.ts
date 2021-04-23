import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent  {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getNotes() {
    return this.firestore.collection('note').snapshotChanges();
  }

  addNotes(payload: iNote) {
    return this.firestore.collection('note').add(payload);
  }

  updateNote(noteId: string, payload: iNote) {
    return this.firestore.doc('note/' + noteId).update(payload);
  }

  deleteNote(noteId: string) {
    return this.firestore.doc('note/' + noteId).delete();
  }


}

export interface iNote {
  id?: string;
  name: string;
  // email: string;
  note: string;

}
