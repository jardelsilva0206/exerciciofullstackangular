import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
 
  title = 'Ola mundo!'
  userObject = {
    name: 'Pedro',
    age: '20',
    id: 1
  }

  produtoObject={
    nome: 'Tupware',
    preco: '32,90',
    descricao: "descricao"
  }

  personagemObject={
    img: 'https://image.api.playstation.com/cdn/UP1018/CUSA02158_00/pfMwZpkMxv9vIe73xEKgeMiv0V4RMaBC.png',
    nome: "Lego vingadores",
    classe: "brinquedo",
    poderes: "Diversão, Entretenimento, Fofura",
    descricao: "Feito de plástico"
  }

  constructor(private httpService: HttpService){}
 
  

  evento(){
    this.httpService.getByIdRequest(1).subscribe((response)=>{
      console.log(response)
    });
  }

}
