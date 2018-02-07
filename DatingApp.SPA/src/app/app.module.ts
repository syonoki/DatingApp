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
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
    DxButtonModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ AuthService, AlertifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
