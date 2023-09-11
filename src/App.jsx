import { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
/* import ChangeTitleExample from "./components/ChangeTitleExample";
import GetResizeFromWindow from "./components/GetResizeFromWindow";
import Interval from "./components/Interval";
import UserLogged from "./components/UserLogged"; */

function App() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <h1>Clase 7 - React</h1>
      {/* <ChangeTitleExample />
      <Interval />
      <GetResizeFromWindow />
      <UserLogged /> */}
      <button onClick={() => setMostrar(!mostrar)}>Intercambiar Componentes</button>
      {mostrar ? <ClassComponent /> : <FunctionalComponent/> }
    </>
  );
}

export default App;
