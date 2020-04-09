import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmmount] = useState(''); 

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Přidat novou položku</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Položka</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Vložte text..." />
                </div>  
                <div className="form-control">
                    <label htmlFor="amount">Částka <br />
                        (záporné číslo - výdaje, kladné číslo - příjmy)
                        </label>
                    <input type="number" value={amount} onChange={(e) => setAmmount(e.target.value)} placeholder="Vložte částku..." />
                </div>
                <button className="btn">Přidat položku</button>
            </form>
        </div>
    )
}

