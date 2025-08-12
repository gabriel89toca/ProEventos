import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  widthImg: number = 100;
  marginImg:  number = 2;
  exibirImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista() {
    return this._filtroLista;
  }

  
  public set filtroLista(value: string) {
     this._filtroLista = value;
     this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
  filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private http: HttpClient) { }

  

  ngOnInit(): void {
    this.GetEventos();
  }

  alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }

  /**
   * GetEventos
   */
  public GetEventos(): void {

 this.http.get('https://localhost:7128/api/Eventos').subscribe(
      Response => {
        this.eventos = Response;
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
