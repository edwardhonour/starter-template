import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './data.resolver';
import { LoggedinGuard } from './loggedin.guard';
import { DeptFormComponent } from './pages/dept-form/dept-form.component';
import { DeptListComponent } from './pages/dept-list/dept-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard] },
  { path: 'dept-list', component: DeptListComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard]  },
  { path: 'dept-form', component: DeptFormComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard]  },
  { path: 'dept-form/:id', component: DeptFormComponent, resolve: { data: DataResolver }, canActivate: [LoggedinGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
