import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTodosComponent } from './edit-todos.component';

const routes: Routes = [{ path: '', component: EditTodosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTodosRoutingModule { }
