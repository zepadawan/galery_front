import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'node-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  refApiImages = environment.api_image + "christian/";
  constructor() { }

  ngOnInit(): void {
  }

}
