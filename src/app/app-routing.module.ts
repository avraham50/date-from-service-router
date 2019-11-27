import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvrahamComponent } from './comps/routings/avraham/avraham.component';
import { YehudaComponent } from './comps/routings/yehuda/yehuda.component';
import { DataTitleComponentComponent } from './comps/routings/data-title-component/data-title-component.component';
import { CanActivateDataTitleService } from './services/guard/can-activate-data-title.service';
import { JsonAppUserComponent } from './comps/routings/json-app-user/json-app-user.component';
import { LoginComponent } from './comps/routings/login/login.component';



const routes: Routes = [
  { path: 'avraham-Component', component: AvrahamComponent },
  { path: 'yehuda-Component', component: YehudaComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'data-title',
    component: DataTitleComponentComponent,
    data: {
      title: 'my name A.Y.Shor',
      id: 4,
      name: 'avremy'
    },
    canActivate: [CanActivateDataTitleService]
  },
  { path: 'user/:id', component: JsonAppUserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/yehuda-Component', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
