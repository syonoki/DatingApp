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
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.routing';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxButtonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService, AlertifyService, AuthGuard ], // Gaurd는 service처럼 처리
  bootstrap: [AppComponent]
})
export class AppModule { }
