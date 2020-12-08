import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageComponent } from './home/page.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import {CustomerService} from "./services/customer.service";
import {HeaderDataService} from "./services/header-data.service";
import {LoggingService} from "./services/logging.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    CustomerService,
    HeaderDataService,
    LoggingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
