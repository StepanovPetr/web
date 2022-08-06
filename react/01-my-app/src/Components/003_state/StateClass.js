import React from 'react';

// Cвойства Компонента класса.
class StateClass extends React.Component {
  // Конструктор класса.
  constructor(props)
  {
      super(props);
      // Установка начального локального состояния.
      this.state= {Name:'Vasy' , Age : 18 };
  }
  
  render() {
      // Изменения локального состояния.
      //this.setState({Name: "hello word" })
      return <h1>Hello, {this.state.Name}  {this.state.Age} </h1>;
    }
  }

  // Экспорт класса.
  export default StateClass;