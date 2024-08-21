import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  constructor (private router: Router) {

  }

  suivant() {
      this.router.navigate(["conclusion"]);
  }
  precedent() {
      this.router.navigate(["outils"]);
  }

  ngOnInit(): void {
  }

}
