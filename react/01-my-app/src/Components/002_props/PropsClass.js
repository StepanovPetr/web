import React from 'react';

// Cвойства Компонента класса.
class PropsClass extends React.Component {
    
  render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

  // Экспорт класса.
  export default PropsClass;