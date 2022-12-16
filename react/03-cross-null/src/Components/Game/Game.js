import React from 'react';
import Item from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

// Cвойства Компонента класса.
class Game extends React.Component {
    // Конструктор класса.
    constructor(props) {
        super(props);
        // Установка начального локального состояния.
        this.state = {
            items: [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ],
            newItems: [false, false, false]
        };
    }

    render() {
        const listItems =
            this.state.items.map((item) => {
                item.map((element) => {
                    return <Item isCross='true' />
                })
            })

        console.log(listItems);
        return (<div>
            {listItems}
        </div>)
    }
}

// Экспорт класса.
export default Game;