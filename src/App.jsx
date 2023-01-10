import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, addManyCustomersAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./AsyncActions/customers";

function App() {
    const deletedComponentRef = React.useRef(null);
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    // const [visibleUsersList, setVisibleUsersList] = React.useState(false);
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer.id))
    }

    const removeCustomer = (customers) => {
         dispatch(removeCustomerAction(customers))
        window.scrollTo(0, deletedComponentRef.current.offsetTop);
    }

  return (
      <div className="App">
          <div className="menu">
        <div className="balance">Баланс: {cash} BTC</div>
        <div className="App-buttons">
            <div className="App-buttons__cash">
            <button onClick={()=>addCash(Number(prompt()))}>Поповнити баланс</button>
            <button onClick={()=>getCash(Number(prompt()))}>Зняти з баланса</button>
            </div>
            <div className="App-buttons__customers">
            <button onClick={()=>addCustomer(prompt())}>Додати клієнта</button>
            <button onClick={()=>dispatch(fetchCustomers())}>Список клієнтів</button>
            </div>
        </div>
          </div>
          {
              customers.length > 0 ?
                  <div className="customers-list">
                      {
                          customers.map((customer) => {
                                return (
                                    <div className="user"
                                         onClick={()=>removeCustomer(customer.id)}
                                         key={customer.id}>
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
