import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FeatureComponent } from "./feature.component";

const routes: Routes = [
  {
    path: "",
    component: FeatureComponent,

    children: [
      { path: "", redirectTo: "todos", pathMatch: "full" },
      {
        path: "todos",
        loadChildren: () =>
          import("./todos/todos.module").then(m => m.TodosModule)
      },
      {
        path: "add-todos",
        loadChildren: () =>
          import("./add-todos/add-todos.module").then(m => m.AddTodosModule)
      },
      {
        path: "edit-todos/:id",
        loadChildren: () =>
          import("./edit-todos/edit-todos.module").then(m => m.EditTodosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
