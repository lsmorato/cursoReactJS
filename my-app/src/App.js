import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <div style={{width:'300px', height: '300px'}}>qualquer coisa... no meu conteúdo temporário</div>     
      <Footer/>
    </div>
  );
}

export default App;
