import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from "@angular/http";

//servives

import {InfoService} from './services/info.service';
import {PortfolioService} from './services/portfolio.service';

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
    HttpModule
  ],
  providers: [

  InfoService,
  PortfolioService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
