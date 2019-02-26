import {Component, OnInit} from '@angular/core';
import {Note} from '../models/note';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-note-managment-component',
  templateUrl: './note-managment-component.component.html',
  styleUrls: ['./note-managment-component.component.css']
})
export class NoteManagmentComponentComponent implements OnInit {

  notes: Note[];
  selectedNote: Note;

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(notes => this.notes = notes);
  }

  addEmptyNote(): void {
    this.noteService.addEmptyNote()
      .subscribe(res => this.notes.push(res));
  }

  remove(note: Note): void {
    this.notes = this.notes.filter(obj => obj !== note);
    this.noteService.removeNote(note.id).subscribe((res: any) => {
    }, error => console.log(error));
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  update(note: Note): void {
    this.noteService.updateNote(note)
      .subscribe((res: any) => {
      }, error => console.log(error));
  }
}
