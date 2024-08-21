import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { ImportanceComponent } from './importance/importance.component';
import { ObjectifsComponent } from './objectifs/objectifs.component';
import { OutilsComponent } from './outils/outils.component';
import { ConseilsComponent } from './conseils/conseils.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  {path: "", component: FinalComponent},
  {path: "introduction", component: PlanComponent},
  {path: "importance", component: ImportanceComponent},
  {path: "objectifs", component: ObjectifsComponent},
  {path: "outils", component: OutilsComponent},
  {path: "conseils", component: ConseilsComponent},
  {path: "conclusion", component: ConclusionComponent},
  {path: "final", component: FinalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
