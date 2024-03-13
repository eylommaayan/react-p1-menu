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

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

export default App;
