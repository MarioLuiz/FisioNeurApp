import { Component, OnInit } from '@angular/core';

import { Frase } from './../shared/model/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(evento: Event): void {
    this.resposta = (<HTMLInputElement>evento.target).value;
    //console.log('this.resposta: ',this.resposta);
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta');
      //trocar pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);
      //console.log('this.progresso: ', this.progresso);

      //atualizando o obj da rodada
      this.atualizaRodada();

    } else {
      alert('A tradução está errada');
    }

  }


  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    //console.log('this.rodadaFrase: ', this.rodadaFrase);

    //limpar a resposta
    this.resposta = '';
  }

}
