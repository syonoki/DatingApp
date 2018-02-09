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
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.routing';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { AuthModule } from './auth/auth.module';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent
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
    RouterModule.forRoot(appRoutes),
    AuthModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver
  ], // Gaurd는 service처럼 처리
  bootstrap: [AppComponent]
})
export class AppModule { }
