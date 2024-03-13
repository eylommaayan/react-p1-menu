import "./index.css";
import mushroomsImage from "./assets/mushrooms.jpg"; // Corrected import path

function Pizza() {
  return (
    <>
      <img src={mushroomsImage} alt="Mushrooms" />
      <h2>Pizza</h2>
    </>
  );
}

function Header() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("כרגע אנחנו פתוחים");
  // else alert("מצטערים סגרנו ");

  return <h1>Fast Reacr Pizza </h1>;
}

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <Pizza />
      <Pizza />
      <Pizza />
      <Header />
    </>
  );
}

export default App;
