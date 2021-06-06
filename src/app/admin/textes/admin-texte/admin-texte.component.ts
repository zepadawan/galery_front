import { Component, OnInit } from '@angular/core';
import { Texte } from 'src/app/models/texte';

@Component({
  selector: 'node-admin-texte',
  templateUrl: './admin-texte.component.html',
  styleUrls: ['./admin-texte.component.css']
})
export class AdminTexteComponent implements OnInit {

  currentpage = "Gestion des textes";
  parentPage = "Textes";
  page = "Administration";

  textes: Texte[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
