import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "feature", pathMatch: "full" },
  {
    path: "feature",
    loadChildren: () =>
      import("./modules/feature/feature.module").then(m => m.FeatureModule)
  },
  {
    path: "**",
    redirectTo: "feature"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
