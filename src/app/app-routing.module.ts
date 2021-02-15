import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'contact', component: ContactComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
