import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';
import { ProduitService } from './../services/produit.service';
import { AuthService } from './../services/auth.service';
import { Image } from './../model/image.model';

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
        this.produits.forEach(produit => {
          this.produitService.loadImage(produit.image.idImage).subscribe((img: Image) => {
            produit.imageString = 'data:' + img.typeImage + ';base64,' + img.image;
          });
        }
        );
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
