import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.component.html',
  styleUrls: ['./objectifs.component.css']
})
export class ObjectifsComponent implements OnInit {

  constructor (private router: Router) {

  }

  suivant() {
      this.router.navigate(["outils"]);
  }

  precedent() {
      this.router.navigate(["importance"]);
  }

  ngOnInit(): void {
  }

}
