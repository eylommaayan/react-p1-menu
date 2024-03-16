import './index.css';
import mushroomsImage from './assets/mushrooms.jpg'; // Corrected import path

function Pizza() {
  return (
    <>
      <img src={mushroomsImage} alt="Mushrooms" />
      <h2>Pizza</h2>
    </> 
  );
}

function Header() {
 return <h1>תפריט פיצה מהיר</h1>
}

function Menu() {

}

function Footer(){

}

function App() {
  return (
    <>
     <Header/>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

export default App;
