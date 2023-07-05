import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}

