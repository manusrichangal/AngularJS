import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';

import { NavbarComponent } from './template/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { CalcComponent } from './pages/calc/calc.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterService } from './pages/register/register.service';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CalcComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
