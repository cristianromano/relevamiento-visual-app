import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: Auth
  ) {
    this.form = this.createForm();
  }

  ngOnInit() {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async irRegistro() {
    this.router.navigate(['/registro']);
  }

  async login() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    const singIn = await signInWithEmailAndPassword(this.auth, email, password)
      .then((e) => {
        console.log(e.user);
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        console.log(e.code);
      });
  }
}
