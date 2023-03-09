import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {TruncatePipe} from './truncate.pipe';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ProdutoComponent } from './produto/produto.component';
import { PersonagemComponent } from './personagem/personagem.component';

@NgModule({
  declarations: [
    AppComponent,
  TruncatePipe,
  UserComponent,
  ProdutoComponent,
  PersonagemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
