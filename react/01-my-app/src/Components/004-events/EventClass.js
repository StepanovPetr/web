import React from 'react';
//npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Cвойства Компонента класса.
class EventClass extends React.Component {
  // Конструктор класса.
  constructor(props) {
    super(props);
    // Установка начального локального состояния.
    this.state = { Name: 'Vasy', Age: 18 };
  }

  clickButton = () =>{
    console.log('clickButton ');
  }

  render() {
    // Изменения локального состояния.
    //this.setState({Name: "hello word" })
    return (
      <div>
        <h1>Hello, {this.state.Name}  {this.state.Age} </h1>
        <button  type="button" className='btn btn-dark' onClick={this.clickButton}>  My button </button>

      </div>
    );
  }
}

// Экспорт класса.
export default EventClass;