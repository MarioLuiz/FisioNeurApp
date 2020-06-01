import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = "Aprendendo Inglês (Teste App Tradutor)";
   
   
    testeTopoButton(){
        this.titulo = "Teste executado com sucesso!";
    }
}
