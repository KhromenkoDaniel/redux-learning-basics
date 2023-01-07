import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }
  return (
      <div className="App">
        <div className="balance">Баланс: {cash} BTC</div>
        <div className="App-buttons">
          <button onClick={()=>addCash(Number(prompt()))} >Поповнити баланс</button>
          <button onClick={()=>getCash(Number(prompt()))}>Зняти з баланса</button>
        </div>
      </div>
  );
}

export default App;
