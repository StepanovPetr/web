import {Animal} from './Animal'
import {Habitat} from './Enums/Habitat.js'
import {View} from './Enums/View.js'

const test = () => {
    let animal1 : Animal = new Animal('Лев', 20, 5, Habitat.Forest, View.Predator) 
    let animal2 : Animal = new Animal('Заяц', 1, 5, Habitat.Forest, View.Herbivore)
    let animal3 : Animal = new Animal('Вреблюд', 1, 5, Habitat.Desert, View.Herbivore)

    console.log(animal1);
    console.log(animal2);
    console.log(animal3);

    const animals: Animal[] = [];
    animals.push(animal1);
    animals.push(animal2);
    animals.push(animal3);
    console.table(animals);

    fetch('https://jsonplaceholder.typicode.com/todos/', {})
    .then(response => response.json())
    .then(json => console.log(json))
}

test();