import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'node-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  @Input() page: string;
  @Input() currentpage: string;

  constructor() { }

  ngOnInit(): void {

    this.page = "Page d'administration";
  }

}
