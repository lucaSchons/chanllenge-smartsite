import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formComponent } from './form-component/form.component';
import { listcardComponent } from './list-card/list-card.component';
import { AcademiasService } from './academias.service';

@NgModule({
  declarations: [
    AppComponent,
    formComponent,
    listcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AcademiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
