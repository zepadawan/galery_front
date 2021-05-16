import { Category } from './../../../models/category';
import { Result } from './../../../models/result';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tableau } from 'src/app/models/tableau';
import { CartService } from 'src/app/services/cart.service';
import { TableauxService } from 'src/app/services/tableaux.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'node-single-tableau',
  templateUrl: './single-tableau.component.html',
  styleUrls: ['./single-tableau.component.css']
})
export class SingleTableauComponent implements OnInit {

  tableau: Tableau;
  idCategorie: number;
  categorie: string;
  prefUrlImage = `${environment.api_image}`;

  constructor(private route: ActivatedRoute,
    private tableauxService: TableauxService,
    private categoryService: CategoryService,
    private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.params['id'];
    this.tableauxService.getTableauById(id)
      .then((data: Result) => {
        this.tableau = data.args;
        this.idCategorie = this.tableau.id_category;
        this.getCategorieName(this.idCategorie);
      })
      .catch((data: Result) => {
        console.log(data.message);
      });

  }

  getCategorieName(id: number) {
    this.categoryService.getCategoryNameById(id)
      .then((data: Category) => {
        this.categorie = data.libelle;
      })
      .catch()




  }

  ngOnDestroy() {
  }

  onAddToCart(tableau: Tableau): void {
    this.cartService.addProductToCard(tableau);
  }
}
