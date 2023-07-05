import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';
import { ProduitService } from './../services/produit.service';
import { Categorie } from './../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

    newProduit = new Produit();
    message?: string;
    categories?: Categorie[];
    newIdCat?: number;
    newCategorie?: Categorie;

    constructor(private produitService: ProduitService) { }

    ngOnInit(): void {
      this.categories = this.produitService.listerCategories();
    }

    addProduit() {
      this.produitService.ajouterProduit(this.newProduit);
      this.message = `Produit ${this.newProduit.nomProduit} ajouté avec succès !`;
    }

}
