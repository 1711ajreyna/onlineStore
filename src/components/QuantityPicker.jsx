import { useState } from 'react';
import "./QuantityPicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let newVal = quantity + 1;
        setQuantity(newVal);
    }

    function decrease() {
        let newVal = quantity - 1;
        if (newVal > -1) {
            setQuantity(newVal);
        }
    }

    return (
        <div className="qt-picker">
            <button className="btn-btn-sm btn-outline-success" disabled={quantity == 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn-btn-sm btn-outline-success" onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;