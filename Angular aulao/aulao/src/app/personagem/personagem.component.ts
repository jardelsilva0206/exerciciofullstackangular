import { Component } from '@angular/core';

interface personagemInterface{
  img: string,
  nome: string,
  classe: string,
  poderes: string,
  descricao: string
}

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {

}
