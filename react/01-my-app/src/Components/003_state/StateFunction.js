import { useState } from 'react';

// Cвойства Компонента функции.
function StateFunction(props) {
    // Хук для работы с локальным состоянием.
    const [name, setName] = useState('Vasy');
    const [age, setAge] = useState(18);

    //setName("hello word");
    return <h1>Hello, {name}  {age} </h1>;
  }
    
  // Экспорт функции.
export default StateFunction;