import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes = [
  {path: '', component: HomeComponent },

  {path: 'service', component: ServicesComponent },
  { path: 'service', redirectTo: '/service', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: TeamComponent },
  { path: 'signup', redirectTo: '/signup',  pathMatch: 'full'  },
  { path: 'logout', component: LogoutComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, TeamComponent];
