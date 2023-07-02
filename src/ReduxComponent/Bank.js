import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Action_Creators } from '../State';

export default function Bank() {

    const dispatch = useDispatch();
    const { withdrawMoney, depositeMoney } = bindActionCreators(Action_Creators, dispatch);
    const myAmount = useSelector(state => state.amount);

  return (
    <>
        <button className='btn btn-secondary' onClick={() => (withdrawMoney(10))}>Withdraw -</button>
        <span>dd to card {(myAmount)}</span>
        <button className='btn btn-primary' onClick={() => (depositeMoney(10))}>Deposite +</button>
    </>
  )
}
