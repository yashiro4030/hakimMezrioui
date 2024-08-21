import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "importance-app",
    templateUrl: "./importance.component.html",
    styleUrls: ["./importance.component.css"]
})

export class ImportanceComponent {
    question: boolean = true;

    constructor (private router: Router) {

    }

    suivant() {
        this.router.navigate(["objectifs"]);
    }
    precedent() {
        this.router.navigate(["introduction"]);
    }

    onRepond() {
        this.question = !this.question;
    }
}