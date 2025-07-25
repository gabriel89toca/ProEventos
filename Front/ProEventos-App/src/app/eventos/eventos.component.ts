import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  constructor(private http: HttpClient) { }

  

  ngOnInit(): void {
    this.GetEventos();
  }

  /**
   * GetEventos
   */
  public GetEventos(): void {

    this.http.get('https://localhost:7128/api/Eventos').subscribe(
      Response => this.eventos = Response,
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
