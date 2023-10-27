import Title from './components/Title/Title';
import CardEvento from './components/CardEventos/CardEvento.';
import Container from './components/container/container';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Title text="Guilherme Amorim" />

      <br></br>

      <Container>

        <CardEvento tituloEvento="Nome Evento" subEvento="Testando a configuração de propriedade Testando a configuração de propriedade Testando a configuração de propriedade" btnEvento="Conectar" />
        <CardEvento tituloEvento="Nome Evento 2" subEvento="Evento muito legal de C#" btnEvento="Conectar" />
        <CardEvento tituloEvento="Nome Evento 3" subEvento="Evento muito legal de java" btnEvento="Conectar" />
        <CardEvento tituloEvento="Nome Evento 4" subEvento="Evento muito legal de Python" btnEvento="Conectar" />
        <CardEvento tituloEvento="Nome Evento 5" subEvento="Evento muito legal de Ruby" btnEvento="Conectar" />
        
      </Container>

    </div>
  );
}

export default App;
