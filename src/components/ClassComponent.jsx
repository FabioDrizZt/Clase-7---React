import { Component } from "react";
const names = ["Pedro", "Juan", "Camila"];

export default class ClassComponent extends Component {
  state = {
    count: 0,
    message: "",
    name: null,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //1er Método del ciclo de vida -> al montarse el componente
  componentDidMount() {
    this.setState({
      message: "Saludos desde componentDidMount",
      name: names[this.state.count],
    });
    //Llamados iniciales a API's
  }
  //2do Método del ciclo de vida -> Al actualizarse el componente
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState({
        message: "Saludos desde componentDidUpdate",
        name: names[this.state.count % names.length],
      });
    }
  }
  //3er Método del ciclo de vida -> Al desmontarse el componente
  componentWillUnmount(){
    console.log('Adios desde componentWillUnmount')
  }


  render() {
    return (
      <div>
        <h2>Componente de clase</h2>
        <h1>El nombre es: {this.state.name}</h1>
        <p>La cuenta es: {this.state.count}</p>
        <p>El mensaje es: {this.state.message}</p>
        <button onClick={() => this.incrementCount()}>Incrementar</button>
      </div>
    );
  }
}
