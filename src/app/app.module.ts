import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from "@angular/http";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


//services

import {InfoService} from './services/info.service';
import {PortfolioService} from './services/portfolio.service';
import { MessageService } from './services/message.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  InfoService,
  PortfolioService,
  MessageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
