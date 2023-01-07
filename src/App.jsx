import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }
    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch({type: 'ADD_CUSTOMER', payload: customer})
    }
    const removeCustomer = (customer) => {
        dispatch({type: 'REMOVE_CUSTOMER', payload: customer})
    }
  return (
      <div className="App">
        <div className="balance">Баланс: {cash} BTC</div>
        <div className="App-buttons">
            <button onClick={()=>addCash(Number(prompt()))} >Поповнити баланс</button>
            <button onClick={()=>getCash(Number(prompt()))} >Зняти з баланса</button>
            <button onClick={()=>addCustomer(prompt())} >Додати клієнта</button>
            <button onClick={()=>removeCustomer(prompt())} >Видалити клієнта</button>
        </div>
          {
              customers.length > 0 ?
                  <div>
                      {
                            customers.map((customer,index) => {
                                return (
                                    <div style={{
                                        backgroundColor: "#405cf5",
                                        borderRadius: "6px",
                                        borderWidth: "0",
                                        color:"#fff",
                                        cursor: "pointer",
                                        fontFamily: "Roboto,Ubuntu,sans-serif",
                                        fontSize: "25px",
                                        fontWeight: "600",
                                        height:"auto",
                                        margin:"12px",
                                        padding: "1px 1px",
                                        textAlign: "center",
                                        whiteSpace:"nowrap",
                                        width:"300px"
                                    }} key={index}>
                                        <p>{customer.name}</p>
                                    </div>
                                )
                            })
                      }
                  </div>
                  :
                  <div style={{marginTop: '20px',fontSize:'28px',color:'#405cf5'}}> Немає клієнтів !</div>
          }
      </div>
  );
}

export default App;
