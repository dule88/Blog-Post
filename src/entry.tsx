import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { App } from "./components/App";
import { setupStore } from "./redux/store";

const domContainer = document.querySelector("#app");

if (domContainer) {
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    // we are providing undefined as parameter since we don't want to preload any state
    <Provider store={setupStore(undefined)}>
      <Router>
        <Routes>
          <Route element={<App />} path="/*" />
        </Routes>
      </Router>
    </Provider>,
  );
}
