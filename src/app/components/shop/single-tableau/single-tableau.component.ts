import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  prefUrlImage = `${environment.api_image}`;
  tableauSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private tableauxService: TableauxService,
    private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.params['id'];
    this.tableauSubscription = this.tableauxService.tableauSubject.subscribe(
      (data: Tableau[]) => {
        this.tableau = this.tableauxService.getTableauById(id);
      }
    );
    this.tableauxService.emitTableaux();
  }

  ngOnDestroy() {
    this.tableauSubscription.unsubscribe();
  }

  onAddToCart(tableau: Tableau): void {
    this.cartService.addProductToCard(tableau);
  }
}
