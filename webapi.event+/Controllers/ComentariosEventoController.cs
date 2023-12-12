using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {

        ComentariosEventoRepository comentario = new ComentariosEventoRepository();

        //Início da configuração do Controller para a IA

        //armazena dados do serviço da API externa (ia - azure)
        private readonly ContentModeratorClient _contentModeratorClient;

        /// <summary>
        /// Construtor que recebe os dados necessários para acesso ao serviço externo
        /// </summary>
        /// <param name="contentModeratorClient">Objeto do tipo ContentModeratorClient</param>
        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        //método que espera a resposta da API da Azure (IA)

        [HttpPost("ComentarioIA")]
        public async Task<IActionResult> PostIA(ComentariosEvento novoComentario)
        {
            try
            {
                if ((novoComentario.Descricao).IsNullOrEmpty())
                {
                    return BadRequest("A descrição do comentário não poder estar vazio ou nulo");
                }

                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(novoComentario.Descricao!));


                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                if (moderationResult.Terms != null)
                {
                    novoComentario.Exibe = false;

                    comentario.Cadastrar(novoComentario);
                }
                else
                {
                    novoComentario.Exibe = true;

                    comentario.Cadastrar(novoComentario);
                }

                return StatusCode(201, novoComentario);

            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe());
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetShow()
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe());
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario/{id}")]
        public IActionResult GetByIdUser(Guid id)
        {
            try
            {
                return Ok(comentario.BuscarPorIdUsuario(id));
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                comentario.Cadastrar(novoComentario);

                return StatusCode(201, novoComentario);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);

                return NoContent();

                //return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
    }
}
