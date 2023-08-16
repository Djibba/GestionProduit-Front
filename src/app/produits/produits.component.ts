import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';
import { ProduitService } from './../services/produit.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];

  constructor(private produitService: ProduitService, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe(
      produits => {
        this.produits = produits;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  supprimerProduit(prod: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(prod.idProduit!).subscribe(() => {
          this.chargerProduits();
        });
  }


}
