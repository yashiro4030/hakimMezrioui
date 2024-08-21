import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "plan",
    templateUrl: "./plan.component.html",
    styleUrls: ["./plan.component.css"]
})

export class PlanComponent {

    constructor (private router: Router) {

    }

    suivant() {
        this.router.navigate(["importance"]);
    }

}