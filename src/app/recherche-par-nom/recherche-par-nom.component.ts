import { Component, OnInit } from '@angular/core';
import { ProduitService } from './../services/produit.service';
import { Produit } from './../model/produit.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  nomProduit!: string;
  produits!: Produit[];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {

  }

  rechercherProds(){
    this.produitService.rechercheParNom(this.nomProduit).subscribe(
      data => {
        this.produits = data;
      }
    );
  }

}
