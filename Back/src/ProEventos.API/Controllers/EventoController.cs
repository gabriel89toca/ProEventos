using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{

    public EventoController()
    {

    }

    public IEnumerable<Evento> _eventos = new Evento[]{
            new Evento{
            EventoId = 1,
            Tema = "Festa do Mateus Cabeção e Miguel do chapel",
            Local = "Salão de festas",
            Lote = "1º Lote",
            QtdPessoas = 250,
            DataEvento = DateTime.Now.AddDays(2).ToString(),
            ImagemURL = "fotoCabecaNaoCarrega.png"
        },
        new Evento{
            EventoId = 2,
            Tema = "Festa da Laurinha",
            Local = "Salão de festas",
            Lote = "2º Lote",
            QtdPessoas = 100,
            DataEvento = DateTime.Now.AddDays(6).ToString(),
            ImagemURL = "fotodaLaurinhaLindinha.png"
        }
    };


    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _eventos;
    }

    [HttpGet("{id}")]
    public IEnumerable<Evento> GetById(int id)
    {
        return _eventos.Where(evento => evento.EventoId == id);
    }



    [HttpPost]
    public string Post()
    {
        return "Exemplo de post Legalzinho";
    }


    [HttpPut("{id}")]
    public string Put(int id)
    {
        return $"Exemplo de put com id = {id}";
    }


    [HttpDelete("{id}")]
    public string Delete(int id)
    {
        return $"Exemplo de Delete com id = {id}";
    }


}
