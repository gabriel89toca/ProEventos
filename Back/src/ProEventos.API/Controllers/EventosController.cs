using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventosController : ControllerBase
{

    private readonly DataContext _context;

    public EventosController(DataContext context)
    {
            this._context = context;

    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
    }

    [HttpGet("{id}")]
    public Evento GetById(int id)
    {
        return _context.Eventos.FirstOrDefault(Evento => Evento.EventoId == id);
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
