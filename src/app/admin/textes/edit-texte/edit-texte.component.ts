import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'node-edit-texte',
  templateUrl: './edit-texte.component.html',
  styleUrls: ['./edit-texte.component.css']
})
export class EditTexteComponent implements OnInit {

  page = "Administration";
  currentpage = "Edition des textes";
  parentPage = "Textes";

  categorieForm: FormGroup;
  successMessage: string;
  errorMessage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
