import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

import CircleAnimation from "./features/CircleAnimation";
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function App() {
  const {fullName} = useSelector(store => store.customer);
  return (
    <>
      <div className='header'>
        <CircleAnimation/>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
      </div>
      {/*{!fullName ?*/}
        <CreateCustomer/>
        {/*:*/}
        <div className='mt-2'>
          <BalanceDisplay/>
          <Customer/>
          <AccountOperations/>
        </div>
      {/*}*/}
    </>



  );
}

export default App;
