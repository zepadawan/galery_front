import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  suignUpForm : FormGroup;
  errorMessage: string;
  constructor(private formBuilder:FormBuilder,
                private router: Router,
                private auth : AuthService) { }

  ngOnInit(): void {
    this.suignUpForm = this.formBuilder.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, Validators.required]
    })
  }

  onSubmit(){
    const email = this.suignUpForm.get('email').value;
    const password = this.suignUpForm.get('password').value;
    this.auth.signup(email, password)
    .then(() =>{
      this.router.navigate(['/shop']);
    }

    )
    .catch(
      (err) => {
        this.errorMessage= err.message;
      }

    );

  }

}
