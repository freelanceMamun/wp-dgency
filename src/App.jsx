import './App.css';
import 'animate.css';
import Home from './page/home/home';
import Footer from './components/Footer/footer';
import './styles/responsive.css';
import Header from './components/hader/header.jsx';
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
