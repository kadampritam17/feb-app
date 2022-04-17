import React from "react";
import { Provider } from "react-redux";
// import ReduxComponentEx1 from "./cp/ReduxComponentEx1";
// import Login from "./login/Login";
// import store from "./login/store";
// import store from "./cp/ReduxStoreExample";
// import LoginStore from "./LoginStore/Store";
// import UserLogin from "./LoginStore/UserLogin";
import Login from "./Plogin/Login";
import store from "./Plogin/store";

export default function App8Feb() {
  return (
    <div>
      {/* <Provider store={store}>
        <Login/>
        </Provider> */}

      {/* <Provider store={store}>
        <ReduxComponentEx1/>  
        </Provider> */}

      {/* <Provider store={LoginStore}>
        <UserLogin />
      </Provider> */}
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}
