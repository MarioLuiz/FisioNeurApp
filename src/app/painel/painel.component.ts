import { Component, OnInit } from '@angular/core';

import { Frase } from './../shared/model/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases : Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string;

  constructor() { console.log('this.frases: ', this.frases)}

  ngOnInit() {
  }

  public atualizaResposta(evento: Event): void {
    this.resposta = (<HTMLInputElement>evento.target).value ;
    //console.log('this.resposta: ',this.resposta);
  }

  public verificarResposta(): void {
    console.log('verificarResposta: ', this.resposta);
  }

}
