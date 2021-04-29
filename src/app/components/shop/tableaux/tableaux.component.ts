import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableauxService } from 'src/app/services/tableaux.service';

@Component({
  selector: 'node-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.css']
})
export class TableauxComponent implements OnInit, OnDestroy {

  Tableaux = [];
  prefixUrlImage = "https://www.christianbialy.fr/images/";
  tableauSubscription: Subscription;

  constructor(private tableauService: TableauxService) { }

  ngOnInit(): void {
    this.tableauSubscription = this.tableauService.productSubject.subscribe(
      (data) => {
        this.Tableaux = data;
      }
    );
    this.tableauService.emitTableaux();
  }
  ngOnDestroy(): void {
    this.tableauSubscription.unsubscribe();
  }
}
