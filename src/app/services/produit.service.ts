import { Injectable } from '@angular/core';
import { Produit } from './../model/produit.model';
import { Categorie } from './../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[];
  categories: Categorie[];

  constructor() {

    this.categories = [
      {idCat: 1, nomCat: 'Ordinateurs'},
      {idCat: 2, nomCat: 'Imprimantes'},
      {idCat: 3, nomCat: 'Smartphones'},
    ];

    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
        categorie: this.categories[0]
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
        categorie: this.categories[1]
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
        categorie: this.categories[2]
      },
    ];
   }

    listeProduits(): Produit[] {
      return this.produits;
    }

    ajouterProduit( prod: Produit){
      this.produits.push(prod);
    }

    supprimerProduit( prod: Produit){
      const index = this.produits.indexOf(prod, 0);
      if (index > -1) {
        this.produits.splice(index, 1);
      }
      //ou Bien
      // this.produits.forEach((cur, index) => {
      //   if(prod.idProduit === cur.idProduit) {
      //     this.produits.splice(index, 1);
      //   }
      // });
    }

    consulterProduit(id:number): Produit {
      return this.produits.find(p => p.idProduit == id)!;
    }

    trierProduits() {
      this.produits = this.produits.sort((n1,n2) => {
        if (n1.idProduit! > n2.idProduit!) {
          return 1;
        }
        if (n1.idProduit! < n2.idProduit!) {
          return -1;
        }
        return 0;
      });
    }


    updateProduit(p:Produit) {
      this.supprimerProduit(p);
      this.ajouterProduit(p);
      this.trierProduits();
    }

    listerCategories(): Categorie[] {
      return this.categories;
    }

    consulterCategorie(id:number): Categorie {
      return this.categories.find(c => c.idCat == id)!;
    }
}
