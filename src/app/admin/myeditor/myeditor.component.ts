import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'node-myeditor',
  templateUrl: './myeditor.component.html',
  styleUrls: ['./myeditor.component.css']
})
export class MyEditorComponent implements OnInit {

  htmlText: string;
  constructor() { }

  ngOnInit(): void {
    this.htmlText = '<p> SDFVQ ttttttttttt FD & nbsp; </p><p>&nbsp;</p > <p><span style="background - color: #2dc26b; color: #ba372a; " > EFG < /span> EZG <strong>EZZEAAAAAAAAAAAA EZ</strong > </p>';
  }

  onClick() {

  }

}
