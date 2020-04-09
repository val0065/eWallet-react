import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithSpaces } from '../utils/format';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}{numberWithSpaces(Math.abs(transaction.amount))} CZK</span>
            <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
