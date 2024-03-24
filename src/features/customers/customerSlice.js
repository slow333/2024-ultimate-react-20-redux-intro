import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  fullName: '', nationalId: '', createdAt: '',
}
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        const options = {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          hour: 'numeric', minute: 'numeric', second: 'numeric', milliseconds: 'numeric',
          fractionalSecondDigits: 3,
        }

        return {
          payload: {
            fullName, nationalId,
            createAt: new Date().toLocaleDateString('ko-KR', options)
          }
        }
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createAt = action.payload.createdAt;
      }
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  }
})
export const {createCustomer, updateName} = customerSlice.actions;

export default customerSlice.reducer;
/*
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId : action.payload.nationalId,
        createdAt : action.payload.createdAt,
      }
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload
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
*/
