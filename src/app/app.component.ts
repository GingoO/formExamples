import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon premier formulaire de bogoss !';
  age = new FormControl("", [Validators.required, Validators.maxLength(3), Validators.pattern("\\d*")]);
  sexe = new FormControl("", Validators.required);
  person;

  ageSexeForm = new FormGroup({
    age: this.age,
    sexe: this.sexe
  });

  utilisateurSoumis(utilisateur) {
    console.log(utilisateur);
  }

  ageSexeSoumis(ageSexe) {
    console.log(ageSexe);
  }



}
