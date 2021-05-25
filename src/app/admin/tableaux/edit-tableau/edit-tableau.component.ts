import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Result } from './../../../models/result';
import { Tableau } from './../../../models/tableau';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableauxService } from './../../../services/tableaux.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'node-edit-tableau',
  templateUrl: './edit-tableau.component.html',
  styleUrls: ['./edit-tableau.component.css']
})
export class EditTableauComponent implements OnInit {

  currentpage = "Edition d'un tableau";
  parentPage = "Tableaux";

  tableau: Tableau;
  categories: Category[] = [];
  currentcategorie: Category;

  errorMessage: string;
  successMessage: string = 'Mise à jour d\'un tableau';

  imagePreview: string;
  loading: boolean;
  tableauForm: FormGroup;


  constructor(private tableauxService: TableauxService,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.categories = this.categoryService.categories;
    this.initFormBuilder();
    this.route.params.subscribe(
      (params: Params) => {
        this.tableauxService.getTableauById(params.id)
          .then(
            (data: Result) => {
              this.tableau = data.args;
              const tab = data.args;
              this.tableauForm = this.fb.group({
                name: [this.tableau.nom, [Validators.required]],
                description: [tab.description,],
                prix: [tab.prix, [Validators.required]],
                dimension: [tab.dimension,],
                sampleFile: [tab.nom_image,],
                categorie: [tab.id_category,],
                anneCreation: [tab.annee_creation,],
              });
              this.imagePreview = `${environment.api_image}` + 'tableaux/' + this.tableau.nom_image;
              console.log('imagePreview = ' + this.imagePreview);

            }
          )
          .catch();
      }
    )
  }

  initFormBuilder() {
    this.tableauForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['',],
      prix: ['', [Validators.required]],
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
    const newTableau = new Tableau();
    newTableau.id = this.tableau.id
    newTableau.nom = this.tableauForm.get('name').value;
    newTableau.prix = this.tableauForm.get('prix').value;
    newTableau.description = this.tableauForm.get('description').value;
    newTableau.dimension = this.tableauForm.get('dimension').value;
    newTableau.id_category = this.tableauForm.get('categorie').value;
    newTableau.annee_creation = this.tableauForm.get('anneCreation').value;
    newTableau.nom_image = (this.tableauForm.get('sampleFile').value).name;
    console.log(newTableau);

    // sauvegarde des modifications
    this.tableauxService.updateTableau(newTableau.id, newTableau)
      .then(
        () => {
          this.successMessage = 'La modification est OK !';
          setTimeout(
            () => {
              this.successMessage = null;
            }, 3000);
          this.tableauForm.reset();
          this.router.navigate(['/shop']);
        }
      )
      .catch(
        (err) => {
          this.errorMessage = err.message;
        }
      );
    this.tableauxService.emitTableaux();

  }

  onAnnul() {
    this.tableauForm.reset();
    this.router.navigate(['/shop']);
  }

}
