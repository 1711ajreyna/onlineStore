import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
    const [list, setList] = useState(["test1","test2","test3"]);

    function addItem() {
        console.log('adding');
        let copy = [...list];
        copy.push('NEW');
        setList(copy);
    }
    return (
        <div className="shopping-list page">
        <h3>Shopping List</h3>

            <div className="box">
                <input type="text" />
                <button onClick={addItem} className="btn btn-sm btn-success">
                    Add
                </button>
            </div>

            <ul>
                {list.map( x => <li>{x}</li> )}
            </ul>
        </div>
    );
}

export default ShoppingList;