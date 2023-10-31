import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produit } from './../model/produit.model';
import { Categorie } from './../model/categorie.model';
import { apiUrl, apiUrlCat } from '../config';
import { CategorieWrapped } from './../model/categorieWrapped.model';
import { Image } from './../model/image.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits!: Produit[];
  // categories: Categorie[];

  constructor(private http: HttpClient) {

   }

    listeProduits(): Observable<Produit[]>{
      return this.http.get<Produit[]>(apiUrl);
    }

    ajouterProduit( prod: Produit): Observable<Produit>{
      return this.http.post<Produit>(apiUrl + '/create', prod, httpOptions);
    }

    supprimerProduit( id: number){
      return this.http.delete<Produit>(apiUrl + `/delete/${id}`, httpOptions);
      // const index = this.produits.indexOf(prod, 0);
      // if (index > -1) {
      //   this.produits.splice(index, 1);
      // }
      //ou Bien
      // this.produits.forEach((cur, index) => {
      //   if(prod.idProduit === cur.idProduit) {
      //     this.produits.splice(index, 1);
      //   }
      // });
    }

    consulterProduit(id:number): Observable<Produit> {
      return this.http.get<Produit>(apiUrl + `/${id}`);
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
      return this.http.put<Produit>(apiUrl + '/update', p, httpOptions);
    }

    ajouterCategorie( cat: Categorie): Observable<Categorie>{
      return this.http.post<Categorie>(apiUrlCat, cat, httpOptions);
    }

    listerCategories(): Observable<CategorieWrapped> {
      return this.http.get<CategorieWrapped>(apiUrlCat);
    }

    consulterCategorie(id:number): Observable<Categorie> {
      return this.http.get<Categorie>(apiUrlCat + `/${id}`);
    }

    rechercheParCategorie(id:number): Observable<Produit[]> {
      return this.http.get<Produit[]>(apiUrl + `/prodsCat/${id}`);
    }

    rechercheParNom(nom:string): Observable<Produit[]> {
      return this.http.get<Produit[]>(apiUrl + `/prodsByNom/${nom}`);
    }

    // image
    uploadImage(file: File,filename: string): Observable<Image> {
      const formData: FormData = new FormData();
      formData.append('image', file, filename);
      return this.http.post<Image>(apiUrl + '/image/upload', formData);
    }

    loadImage(id:number): Observable<Image> {
      return this.http.get<Image>(apiUrl + `/image/get/info/${id}`);
    }
}
