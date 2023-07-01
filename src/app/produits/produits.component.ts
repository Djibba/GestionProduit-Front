import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: string[];

  constructor() {
    this.produits = ['PC DELL', 'Imprimante Epson', 'Tablette Samsung'];
   }

  ngOnInit(): void {
  }

}
