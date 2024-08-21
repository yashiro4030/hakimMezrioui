import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outils',
  templateUrl: './outils.component.html',
  styleUrls: ['./outils.component.css']
})
export class OutilsComponent implements OnInit {

  constructor (private router: Router) {

  }

  suivant() {
      this.router.navigate(["conseils"]);
  }
  precedent() {
      this.router.navigate(["objectifs"]);
  }

  choiceSelected:string = "para";


  ngOnInit(): void {
  }

  showExplication(choice:string) {
    this.choiceSelected = choice;
  }
}