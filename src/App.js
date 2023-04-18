import './App.css';
import Bannercarousel from "./components/Bannercarousel";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog1 from "./components/Blog1";
import Contact from "./components/Contact";
import Cardcarousel from "./components/Cardcarousel";
import Cliend from "./components/Cliends";
import Cliendcard from './components/Cliendscard';
import Footer from './components/Footer';
function App() {
  return (
    <div>
     <Header/> 
       <Bannercarousel/>
      <Blog1/>
      <Contact/>
      <Cardcarousel/>
      <Cliend/>
      <Cliendcard/>
      <Footer/> 
    </div>
  );
}

export default App;
