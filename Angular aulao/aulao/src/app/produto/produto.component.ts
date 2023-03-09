import { Component, Input } from '@angular/core';

interface produtoInterface{
  nome: string,
  preco: string,
  descricao: string
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
@Input() produto: produtoInterface
constructor(){
  this.produto = {} as produtoInterface
} 


}
