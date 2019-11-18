import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { OuvrierComponent } from 'src/app/ouvrier/ouvrier.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { FooterComponent } from 'src/app/footer/footer.component';


const homeRoutes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'ouvrier', component: OuvrierComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
