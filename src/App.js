import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

import store from "./store";
import {deposit} from "./features/accounts/accountSlice";
import {createCustomer} from "./features/customers/customerSlice";
import CircleAnimation from "./features/CircleAnimation";

store.dispatch(deposit(500))
store.dispatch(createCustomer('Tome', 'Ko'))
console.log(store.getState())

function App() {
  return (
    <div>
      <div className='header'>
        <CircleAnimation/>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        <BalanceDisplay/>
      </div>
      <CreateCustomer/>
      <Customer/>
      <AccountOperations/>
    </div>
  );
}

export default App;
