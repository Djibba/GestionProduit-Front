import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';
import { Categorie } from './../model/categorie.model';
import { ProduitService } from './../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {

  produits!: Produit[];
  categories!: Categorie[];
  IdCategorie!: number;


  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {

    this.produitService.listerCategories().subscribe(
      (categories) => {
        this.categories = categories._embedded.categories;
      }
    );

  }

  onChange(): void {

    this.produitService.rechercheParCategorie(this.IdCategorie).subscribe(
      (produits) => {
        this.produits = produits;
      }
    );

  }

}
