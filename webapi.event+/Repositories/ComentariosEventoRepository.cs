using webapi.event_.Contexts;
using webapi.event_.Domains;
using webapi.event_.Interfaces;

namespace webapi.event_.Repositories
{
    public class ComentariosEventoRepository : IComentariosEventoRepository
    {
        private readonly Event_Context _context;

        public ComentariosEventoRepository()
        {
            _context = new Event_Context();
        }

        public ComentariosEvento BuscarPorIdUsuario(Guid id)
        {
            try
            {
                return _context.ComentariosEvento
                    .Select(c => new ComentariosEvento
                    {
                        IdComentarioEvento = c.IdComentarioEvento,
                        Descricao = c.Descricao,
                        Exibe = c.Exibe,
                        IdUsuario= c.IdUsuario,

                        Usuario = new Usuario
                        {
                            Nome = c.Usuario!.Nome
                        },

                        IdEvento= c.IdEvento,
                        Evento = new Evento
                        {
                            NomeEvento = c.Evento!.NomeEvento,
                        }

                    }).FirstOrDefault(c => c.IdUsuario == id)!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(ComentariosEvento comentarioEvento)
        {
            try
            {
                _context.ComentariosEvento.Add(comentarioEvento);

                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                ComentariosEvento comentarioEventoBuscado = _context.ComentariosEvento.Find(id)!;

                if (comentarioEventoBuscado != null)
                {
                    _context.ComentariosEvento.Remove(comentarioEventoBuscado);
                }

                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<ComentariosEvento> ListarSomenteExibe()
        {

            try
            {
                return _context.ComentariosEvento
                    .Select(c => new ComentariosEvento
                    {
                        Descricao = c.Descricao,
                        Exibe = c.Exibe,
                        IdUsuario= c.IdUsuario,

                        Usuario = new Usuario
                        {
                            Nome = c.Usuario!.Nome,
                            IdUsuario= c.IdUsuario
                            
                        },

                        IdEvento= c.IdEvento,
                        Evento = new Evento
                        {
                            NomeEvento = c.Evento!.NomeEvento,
                            IdEvento= c.IdEvento,
                        }

                    }).Where(c => c.Exibe == true).ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public ComentariosEvento BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}