import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  constructor (private router: Router) {

  }

  finir() {
      this.router.navigate(["final"]);
  }
  precedent() {
      this.router.navigate(["conseils"]);
  }

  ngOnInit(): void {
  }

}
