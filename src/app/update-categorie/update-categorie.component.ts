import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from './../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  @Input() categorie!: Categorie;

  @Output() categorieUpdated = new EventEmitter<Categorie>();

  @Input() ajout! : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
}

