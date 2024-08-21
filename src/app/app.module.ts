import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ImportanceComponent } from './importance/importance.component';
import { ObjectifsComponent } from './objectifs/objectifs.component';
import { OutilsComponent } from './outils/outils.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    HeaderComponent,
    ImportanceComponent,
    ObjectifsComponent,
    OutilsComponent,
    ConseilsComponent,
    ConclusionComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
