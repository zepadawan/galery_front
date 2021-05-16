import { Tableau } from './../../../models/tableau';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from './../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableauxService } from './../../../services/tableaux.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'node-edit-tableau',
  templateUrl: './edit-tableau.component.html',
  styleUrls: ['./edit-tableau.component.css']
})
export class EditTableauComponent implements OnInit {

  currentpage = "Maj";
  parentPage = "Admin";

  tableau: Tableau;
  errorMessage: string;
  successMessage: string = 'Saisir';
  imagePreview: string;
  loading: boolean;

  tableauForm: FormGroup;


  constructor(private tableauxService: TableauxService,
    private fb: FormBuilder,
    private usersService: UsersService,
    // private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.tableauxService.getTableauById(params.id)
          .then(
            (tableau: Tableau) => {
              this.tableau = this.tableau;
              this.tableauForm = this.fb.group({
                name: ['', [Validators.required]],
                description: ['',],
                price: ['', [Validators.required]],
                dimension: ['',],
                sampleFile: ['',],
                categorie: ['',],
                anneCreation: ['',],
              })
            }
          )
          .catch();
      }
    )
  }

  onImagePick(event: Event) {

  }

  onSubmit() {

  }


}
