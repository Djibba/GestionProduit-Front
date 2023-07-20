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
  searchTerm!: string;
  allProduits!: Produit[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {

    this.produitService.listeProduits().subscribe(
      data => {
        this.produits = data;
      }
    );

  }

  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter(
      item => item.nomProduit?.toLowerCase().includes(filterText.toLowerCase())
    );
  }


  // rechercherProds(){
  //   this.produitService.rechercheParNom(this.nomProduit).subscribe(
  //     data => {
  //       this.produits = data;
  //     }
  //   );
  // }

}
