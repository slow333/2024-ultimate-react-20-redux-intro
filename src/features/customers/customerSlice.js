const initialStateCustomer = {
  fullName: '',  nationalId : '', createdAt : '',
}

export default function customerReducer(state = initialStateCustomer, action) {
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
export function createCustomer(fullName, nationalId) {
  const options = {
    weekday: 'long', year:'numeric', month:'long', day:'numeric',
    hour:'numeric', minute:'numeric', second:'numeric', milliseconds: 'numeric',
    fractionalSecondDigits: 3,
  }
  return {
    type: 'customer/create',
    payload: {
      fullName: fullName, nationalId: nationalId,
      createdAt: new Date().toLocaleDateString('ko-KR', options),
    }
  }
}

export function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName}
}
