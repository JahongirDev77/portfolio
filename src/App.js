import './App.css';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Prodact from './components/prodact/Prodact';



function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Main/>
      <Prodact/>
      <Card/>
    </div>
  );
}

export default App;
