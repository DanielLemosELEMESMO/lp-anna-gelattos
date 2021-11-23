import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FullBannerComponent } from './full-banner/full-banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PontoForteComponent } from './ponto-forte/ponto-forte.component';
import { ProdutoComponent } from './produto/produto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';
import { MatInputModule } from '@angular/material/input';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FullBannerComponent,
    NavBarComponent,
    PontoForteComponent,
    ProdutoComponent,
    PageNotFoundComponent,
    FormularioContatoComponent,
    CustomInputComponent,
    CustomButtonComponent
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
