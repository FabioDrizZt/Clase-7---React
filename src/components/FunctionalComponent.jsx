import { useEffect, useState } from "react";

const names = ["Pedro", "Juan", "Camila"];

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setname] = useState(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  //1er Método del ciclo de vida -> al montarse el componente
  useEffect(() => {
    setMessage("Saludos desde useEffect []");
    setname(names[0]);
    //Llamados iniciales a API's
    return () => {
        console.log('Adios desde return de useEffect []')
    };
  }, []);

  //2do Método del ciclo de vida ->  "ComponentDidMount" y "ComponentDidUpdate".
  useEffect(() => {
    setname(names[count % names.length]);
    //3er Método del ciclo de vida -> Al desmontarse el componente
    return () => {
        console.log('Adios desde return de useEffect [count]')
    };
  }, [count]);

  return (
    <div>
      <h2>Componente funcional</h2>
      <h1>El nombre es: {name}</h1>
      <p>La cuenta es: {count}</p>
      <p>El mensaje es: {message}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}
