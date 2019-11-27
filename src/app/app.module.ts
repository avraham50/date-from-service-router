import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvrahamComponent } from './comps/routings/avraham/avraham.component';
import { YehudaComponent } from './comps/routings/yehuda/yehuda.component';
import { DataTitleComponentComponent } from './comps/routings/data-title-component/data-title-component.component';
import { JsonAppUserComponent } from './comps/routings/json-app-user/json-app-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './comps/routings/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AvrahamComponent,
    YehudaComponent,
    DataTitleComponentComponent,
    JsonAppUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
