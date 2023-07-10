import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produit } from './../model/produit.model';
import { Categorie } from './../model/categorie.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl: string = 'http://localhost:8080/produits/api';
  produits!: Produit[];
  // categories: Categorie[];

  constructor(private http: HttpClient) {

   }

    listeProduits(): Observable<Produit[]>{
      return this.http.get<Produit[]>(this.apiUrl);
    }

    ajouterProduit( prod: Produit): Observable<Produit>{
      return this.http.post<Produit>(this.apiUrl + '/create', prod, httpOptions);
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

    // listerCategories(): Categorie[] {
    //   return this.categories;
    // }

    // consulterCategorie(id:number): Categorie {
    //   return this.categories.find(c => c.idCat == id)!;
    // }
}
