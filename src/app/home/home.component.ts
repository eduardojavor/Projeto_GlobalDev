import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Eduardo de Lima Javor Junior', idade: 33, email: 'eduardojavor@unifei.edu.br', curso: 'Licenciatura em Matemática' },
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 1;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 1;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
