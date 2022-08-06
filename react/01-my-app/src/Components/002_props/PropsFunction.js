import React from 'react';

// Cвойства Компонента функции.
// function PropsFunction(props) {
//   return <h1>Hello, {props.firstName} {props.lastName} </h1>;
// }

// Cвойства Компонента функции.
function PropsFunction({firstName, lastName }) {
  return <h1>Hello, {firstName} {lastName} </h1>;
}


// Экспорт функции.
export default PropsFunction;