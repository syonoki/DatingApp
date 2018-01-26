import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DxSelectBoxModule,  DxTextAreaModule,
    DxFormModule,  DxFormComponent, DxButtonModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxButtonModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
