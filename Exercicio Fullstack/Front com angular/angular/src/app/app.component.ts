import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ɵinternalCreateApplication } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Animal } from './animal';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public animals: Animal[] = [];
  public editAnimal: Animal | null;
  public deleteAnimal: Animal | null;


  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  public getAnimals(): void {
    this.animalService.getAnimals().subscribe(
      (response: Animal[]) => {
        this.animals = response;
        console.log(this.animals);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddAnimal(addForm: NgForm): void {
    if (this.editAnimal != null) {
      //@ts-ignore
      this.editAnimal.nome = document.querySelector("#nomeAnimal").value
      //@ts-ignore
      this.editAnimal.especie = document.querySelector("#especieAnimal").value
      //@ts-ignore
      this.editAnimal.raca = document.querySelector("#racaAnimal").value
      //@ts-ignore
      this.editAnimal.altura = document.querySelector("#alturaAnimal").value
      //@ts-ignore
      this.editAnimal.peso = document.querySelector("#pesoAnimal").value
      //@ts-ignore
      this.editAnimal.tipoPelagemPlumagem = document.querySelector("#tipoPelagemPlumagem").value
      //@ts-ignore
      this.editAnimal.tipoTratamento = document.querySelector("#tipoTratamento").value
      this.animalService.updateAnimal(this.editAnimal).subscribe(
        (response: Animal) => {
          console.log(response);
          this.getAnimals();
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      )
      document.location.reload();
    } else {
      document.getElementById('add-employee-form')?.click();
      console.log(addForm.value)
      this.animalService.addAnimal(addForm.value).subscribe(
        (response: Animal) => {
          console.log(response);
          //@ts-ignore
          console.log(document.querySelector("#tipoTratamento").value)
          this.getAnimals();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      )
    }

  }
  public atualizarAnimal(): void {
    //@ts-ignore
    var idUpdate: number = document.querySelector('input[name="opcao"]:checked').value
    var i: number = 0

    for (i = 0; i < this.animals.length; i++) {
      if (this.animals[i].id == idUpdate) {
        //@ts-ignore
        document.getElementById('nomeAnimal').value = this.animals[i].nome
        //@ts-ignore
        document.getElementById('especieAnimal').value = this.animals[i].especie
        //@ts-ignore
        document.getElementById('racaAnimal').value = this.animals[i].raca
        //@ts-ignore
        document.getElementById('alturaAnimal').value = this.animals[i].altura
        //@ts-ignore
        document.getElementById('pesoAnimal').value = this.animals[i].peso
        //@ts-ignore
        document.getElementById('tipoPelagemPlumagem').value = this.animals[i].tipoPelagemPlumagem
        //@ts-ignore
        document.getElementById('tipoTratamento').value = this.animals[i].tipoTratamento
        this.editAnimal = this.animals[i]
      }
    }

  }
  public deletarAnimal() {

    //@ts-ignore
    var idDelete: number = document.querySelector('input[name="opcao"]:checked').value
    this.onDeleteAnimal(idDelete);
    console.log(idDelete)
    document.location.reload();


  }
  public onDeleteAnimal(animalId: number | undefined): void {

    this.animalService.deleteAnimal(animalId).subscribe(
      (response: void) => {
        this.getAnimals();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public mostrarCadastros() {
    var i: number;
    for (i = 0; i < this.animals.length; i++) {
      //@ts-ignore
      document.querySelector("#cadastros").innerHTML += '<input id="animaisCadastrados" name="opcao" type="radio" value="'
        + this.animals[i].id + '"><tr> id: "' + this.animals[i].id + '" Nome: "' + this.animals[i].nome +
        "' Espécie: " + this.animals[i].especie + " Raça: " + this.animals[i].raca + " Altura: " + this.animals[i].altura +
        " Peso: " + this.animals[i].peso + " Pelagem/Plumagem: " + this.animals[i].tipoPelagemPlumagem + " Tratamento: " +
        this.animals[i].tipoTratamento + "</tr><br>";
    }
  }
}
