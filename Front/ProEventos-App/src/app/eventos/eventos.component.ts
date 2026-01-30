import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']//,
  //providers: [EventoService]
})
export class EventosComponent implements OnInit {

  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public widthImg: number = 100;
  public marginImg:  number = 2;
  public exibirImagem: boolean = true;
  private _filtroLista: string = '';
  

  public get filtroLista() {
    return this._filtroLista;
  }

  
  public set filtroLista(value: string) {
     this._filtroLista = value;
     this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
  filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private eventoService: EventoService) { }

  public ngOnInit(): void {
    this.GetEventos();
  }

  public alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }

  /**
   * GetEventos
   */
  public GetEventos(): void {

 this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos
      },
      error => console.log(error)
    ); 

/*     this.eventos = [
    {
      Tema: "Angular",
      Local: "São Paulo"
    },
    {
      Tema: "C#",
      Local: "Rio de Janeiro"
    },
        {
      Tema: "Html",
      Local: "São Paulo"
    }
  ]*/
  } 

}
