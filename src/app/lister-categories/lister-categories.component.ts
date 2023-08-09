import { Component, OnInit } from '@angular/core';
import { ProduitService } from './../services/produit.service';
import { Categorie } from './../model/categorie.model';

@Component({
  selector: 'app-lister-categories',
  templateUrl: './lister-categories.component.html',
  styleUrls: ['./lister-categories.component.css']
})
export class ListerCategoriesComponent implements OnInit {

  categories!: Categorie[];

  updateCategorie: Categorie = {"idCat": 0, "nomCat": "", "descriptionCat": ""};

  ajout: boolean = true;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.chargerCategorie();
  }

  chargerCategorie() {
    this.produitService.listerCategories().subscribe(
      data => {
        this.categories = data._embedded.categories;
      }
    );
  }

  categorieUpdated(categorie: Categorie) {
    this.produitService.ajouterCategorie(categorie).subscribe(
      () => this.chargerCategorie()
    );
  }

  updateCat(categorie: Categorie) {
    this.updateCategorie = categorie;
    this.ajout = false;
  }

}
