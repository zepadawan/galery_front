import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Texte } from 'src/app/models/texte';
import { TextesService } from 'src/app/services/textes.service';

@Component({
  selector: 'node-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  textes: Texte[] = [];
  texteSubscription: Subscription;
  constructor(private textesService: TextesService) { }

  ngOnInit(): void {
    this.texteSubscription = this.textesService.textesubject.subscribe(
      (data) => {
        this.textes = data;
      }
    );
    this.textesService.emitTextes();
  }

  ngOnDestroy(): void {
    this.texteSubscription.unsubscribe();
  }

  getTexte(id: number): string {

    return "";
  }

}
