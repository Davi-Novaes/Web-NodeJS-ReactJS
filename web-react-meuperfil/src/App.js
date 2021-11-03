import './App.css';

function App() {
  return (
    <form className="App">
      <div className="App-header">        
        <img src='https://scontent.fssz9-1.fna.fbcdn.net/v/t31.18172-8/10924645_334992303366520_6578969291846620831_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BabyMFPatP4AX_4twpF&_nc_ht=scontent.fssz9-1.fna&oh=eeee1e0b6ae4693f5c0d37bf07418a46&oe=61A8C5E6' className="imagem" alt="foto"></img>
      </div>
      <div className="conteudo">
        
        <h1>Dados Pessoais:</h1>
        <h3><b>Nome:</b> Davi Rodrigues Monteiro de Novaes<br></br> 
        <b>Data de Nascimento:</b> 10/10/2001<br></br>
        <b>Email:</b> davirodriguessk8_@hotmail.com<br></br> 
        <b>Telefone:</b> 13996069111<br></br> 
        <b>Endereço:</b> Rua Pio XII, n° 3832, Suarão, Itanhém - SP</h3>
        
        <h1>Formação:</h1>
        <h3>Ensino Medio Completo<br></br> 
        Atualmente Cursando o 4° Semestre de Ciências da Computação na Universidade Paulista </h3>
               
        
        <h1>Experiência</h1>
        <h3>
        <b>Empresa:</b> Estagiario da Empresa Vox Soluções Departamento em TI<br></br> 
        <b> Conhecimentos: </b> C#, JAVA, NodeJS, ReactJS, JavaScript, PostgreSQL, MySQL, API<br></br> 
        <b> Areá de Atuação</b> Desenvolvedor de Software e IA(Inteligência Artificial)
        </h3>
        
        <h1>Projetos:</h1>
        <b> Projetos Pessoais: </b> Cadastro de Alunos em NodeJS e ReactJS, Cadastro de Tarefas, Programa de Criação de Graficos em JAVA, Criptografia e Descriptografia em Python etc. Conheça alguns de meus Projetos no GITHUB :
        <a href="https://github.com/Davi-Novaes?tab=repositories" className="link" target="Nova Aba"> Link do Meu GITHUB</a>

      </div>
    </form>
  );
}

export default App;
