import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FullBannerComponent } from './full-banner/full-banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProdutoComponent } from './produto/produto.component';
import { PontoForteComponent } from './ponto-forte/ponto-forte.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    FullBannerComponent,
    NavBarComponent,
    ProdutoComponent,
    PontoForteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
