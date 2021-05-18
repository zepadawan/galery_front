import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Tableau } from 'src/app/models/tableau';
import { TableauxService } from 'src/app/services/tableaux.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'node-admin-tableaux',
  templateUrl: './creation-tableau.component.html',
  styleUrls: ['./creation-tableau.component.css']
})
export class AdminTableauxComponent implements OnInit, OnDestroy {

  tableauForm: FormGroup;
  errorMessage: string;
  successMessage: string = 'Saisir';
  imagePreview: string;
  loading: boolean;
  userId: number;

  tableaux: Tableau[] = [];
  tableauSubscription: Subscription;
  currentpage = "Ajouter un tableau";
  parentPage = "Admin";
  constructor(private tableauxService: TableauxService,
    private fb: FormBuilder,
    private usersService: UsersService,
    // private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initFormBuilder();
    this.userId = this.usersService.userId;
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

  initFormBuilder() {
    this.tableauForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['',],
      price: ['', [Validators.required]],
      dimension: ['',],
      sampleFile: ['',],
      categorie: ['',],
      anneCreation: ['',],


    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.tableauForm.get('sampleFile').patchValue(file);
    this.tableauForm.get('sampleFile').updateValueAndValidity();
    const reader = new FileReader();

    reader.onloadend = () => {
      if (this.tableauForm.get('sampleFile').valid) {
        this.imagePreview = (reader.result as string);
      } else {
        this.imagePreview = null;
      }
    }
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.loading = true;
    const tableau = new Tableau();
    tableau.nom = this.tableauForm.get('name').value;
    tableau.description = this.tableauForm.get('description').value;
    tableau.prix = this.tableauForm.get('price').value;
    tableau.nom_image = (this.tableauForm.get('sampleFile').value).name;
    this.tableauxService.saveImageOnServer(this.tableauForm.get('sampleFile').value);
    this.tableauxService.createNewTableau(tableau)
      .then((data) => {
        console.log('New Tableau OK');
        this.successMessage = 'le nouveau tableau : ' + tableau.nom + '  est enregistré';
        setTimeout(
          () => {
            this.successMessage = null;
          }, 3000);
        this.tableauForm.reset();
        this.router.navigate(['/shop']);
        this.loading = false;

      })
      .catch();




  }




}
