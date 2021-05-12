import { Subscription } from 'rxjs';
import { Tableau } from 'src/app/models/tableau';
import { TableauxService } from 'src/app/services/tableaux.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'node-admin-tableaux',
  templateUrl: './admin-tableaux.component.html',
  styleUrls: ['./admin-tableaux.component.css']
})
export class AdminTableauxComponent implements OnInit, OnDestroy {

  tableaux: Tableau[] = [];
  tableauSubscription: Subscription;
  currentpage = "Gestion des tableaux";
  constructor(private tableauxService: TableauxService) { }

  ngOnInit(): void {
    this.tableauSubscription = this.tableauxService.tableauSubject.subscribe(
      (data) => {
        this.tableaux = this.tableauxService.tableaux;
      }
    )
    this.tableauxService.emitTableaux();
  };

  ngOnDestroy(): void {
    this.tableauSubscription.unsubscribe();
  }

}
