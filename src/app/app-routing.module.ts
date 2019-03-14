import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CalcComponent } from './pages/calc/calc.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes=[
{path: '',component: HomeComponent},
{path: 'about',component: AboutComponent},
{path: 'contact',component: ContactComponent},
{path: 'calc',component: CalcComponent},
{path: 'register',component: RegisterComponent},
{path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
