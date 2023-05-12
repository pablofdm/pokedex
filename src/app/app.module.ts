import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsSpaceComponent } from './components/cards-space/cards-space.component';
import { PokecardsComponent } from './components/pokecards/pokecards.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSimpleStateModule } from 'ng-simple-state';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CardsSpaceComponent,
    PokecardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgSimpleStateModule.forRoot({
      enableDevTool: true, 
      enableLocalStorage: true, 
    }),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
