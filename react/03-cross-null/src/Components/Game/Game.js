import React from 'react';
import Item from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';

// Cвойства Компонента класса.
class Game extends React.Component {
    // Конструктор класса.
    constructor(props) {
        super(props);
        // Установка начального локального состояния.
        this.state = { items :[
            [false, false, false],
            [false, false, false],
            [false, false, false]
          ],
        newItems: [false, false, false] };
    }

    render() {

        const listItems = this.state.Items.map((array) =>
        // Wrong! The key should have been specified here:
        //<Item isCross={number} />
        <div className='row'></div>
        array.map((Item) => <Item isCross={Item} />)
        );

        // Изменения локального состояния.
        //this.setState({Name: "hello word" })
        return (<div>
            {/* <div className='row'>
                <Item />
                <Item isCross='true' />
                <Item />
            </div>

            <div className='row'>
                <Item />
                <Item isCross='true' />
                <Item />
            </div>

            <div className='row'>
                <Item />
                <Item isCross='true' />
                <Item />
            </div> */}
            {listItems}
        </div>)
    }
}

// Экспорт класса.
export default Game;