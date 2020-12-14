import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { AboutUsComponent } from './about-us/about-us.component';

import { CreateComponent } from './create/create.component';

import { UpdateComponent } from './update/update.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  
 { path : '', component: HomeComponent },
   
{ path: 'home', component: HomeComponent },
  
 { path: 'login', component: LoginComponent },
 
  
 { path: 'register', component: RegisterComponent },
  
 { path: 'contactus', component: ContactUsComponent },
   
{ path: 'aboutus', component: AboutUsComponent },
 
  { path: 'create', component: CreateComponent },
  
 { path: 'update', component: UpdateComponent },
 { path: 'librarian', component: LibrarianComponent },
 { path: 'member', component: MemberComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
