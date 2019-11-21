import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { OuvrierComponent } from './ouvrier/ouvrier.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeModule } from './home/home/home.module';
import { FooterModule } from './footer/footer/footer.module';
import{ ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
    NavbarComponent,
    OuvrierComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    FooterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
