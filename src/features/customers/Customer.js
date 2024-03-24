import {useSelector} from "react-redux";

function Customer() {
  const {fullName} =
    useSelector(store =>
      store.customer)

  return <h3>👋 Welcome, {fullName} 씨</h3>;
}

export default Customer;
