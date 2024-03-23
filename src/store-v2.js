// noinspection JSDeprecatedSymbols

import {combineReducers, createStore} from "redux";

const initialStateAccount = {
  balance: 0, loan: 0, loanPurpose:''
}
const initialStateCustomer = {
  fullName: '',  nationalId : '', createdAt : '',
}

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'account/requestLoan':
      if(state.loan > 0) return state;
      // LATER
      return { ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      }
    case 'account/payLoan':
      return { ...state, loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      }
    default:
      return state;
  }
}

// const accountStore = createStore(accountReducer)

// accountStore.dispatch({ type: 'account/deposit', payload: 5000})
// accountStore.dispatch({ type: 'account/withdraw', payload: 3000})
// console.log(accountStore.getState())
// accountStore.dispatch({type: 'account/requestLoan',
//   payload: {amount: 1000, purpose: 'buy computer'}
// })
// console.log(accountStore.getState())
// accountStore.dispatch({type:'account/payLoan'})
// console.log(accountStore.getState())
function deposit(amount) {
  return { type: 'account/deposit', payload: amount}
}

function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount}
}
function requestLoan(amount, purpose='') {
  return { type: 'account/requestLoan',
    payload:
      { amount: amount, purpose: purpose, }
  }
}
function payLoan() {
  return { type: 'account/payLoan'}
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/create':
      return {...state,
        fullName: action.payload.fullName,
        nationalId : action.payload.nationalId,
        createdAt : action.payload.createdAt,
      }
        /*customers: [...state.customers, {
          fullName: action.payload.fullName,
          nationalId: action.payload.nationalId,
          createdAt: action.payload.createdAt,
        },]*/

    case 'customer/updateName':
      // const customerLast = state.customers.at(-1)

      return { ...state, fullName: action.payload
/*        customers: state.customers.map(customer => {
          if(customer === customerLast)
            return {...customerLast, fullName: action.payload }
          else return customer
        })*/
      }
    default:
      return state;
  }
}

// const customerStore = createStore(customerReducer);
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})
const store = createStore(rootReducer);

store.dispatch(deposit(1010));
store.dispatch(withdraw(10));

store.dispatch(requestLoan(310, 'rent house'));
store.dispatch(payLoan());
console.log(store.getState())

function createCustomer(fullName, nationalId) {
  return {
    type: 'customer/create',
    payload: {
      fullName: fullName, nationalId: nationalId, createdAt: new Date().toISOString(),
    }
  }
}

function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName}
}
store.dispatch(createCustomer('Hugh Lauri', 'En'))
store.dispatch(createCustomer('test Lauri', 'En'))
store.dispatch(updateName('Perguson'))

console.log(store.getState())

