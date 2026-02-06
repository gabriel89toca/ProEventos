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
  private filtroListado: string = '';
  

  public get filtroLista(): string {
    return this.filtroListado;
  }

  
  public set filtroLista(value: string) {
     this.filtroListado = value;
     this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
  filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private eventoService: EventoService) { }

  public ngOnInit(): void {
    this.GetEventos();
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  /**
   * GetEventos
   */
  public GetEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (eventosRes: Evento[]) => {
        this.eventos = eventosRes;
        this.eventosFiltrados = this.eventos;
      },
      error: (error: any)=> console.log(error)
    });
      /*  criar obserble
      const observer = {
      next: (eventosRes: Evento[]) => {
        this.eventos = eventosRes;
        this.eventosFiltrados = this.eventos;
      },
      error: (error: any)=> console.log(error),
      complete: () => {}
    }
    this.eventoService.getEventos().subscribe(observer);
      
      (eventosRes: Evento[]) => {
        this.eventos = eventosRes;
        this.eventosFiltrados = this.eventos
      },
      error => console.log(error) 
    ); */

/* this.eventos = [{
      Tema: "Angular",
      Local: "São Paulo"
    },{
      Tema: "C#",
      Local: "Rio de Janeiro"
    },{
      Tema: "Html",
      Local: "São Paulo"
    }]*/
  } 

}
