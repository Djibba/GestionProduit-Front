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

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listerCategories().subscribe(
      data => {
        this.categories = data._embedded.categories;
      }
    );
  }

}

