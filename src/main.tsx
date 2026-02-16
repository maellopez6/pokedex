import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import MyRouter from "./router/MyRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRouter /> {/* App est rendu via tes routes */}
    </Provider>
  </React.StrictMode>
);
