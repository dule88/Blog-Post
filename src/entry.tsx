import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./components/App";
import { setupStore } from "./redux/store";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const domContainer = document.querySelector("#app");

if (domContainer) {
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    // we are providing undefined as parameter since we don't want to preload any state
    <Provider store={setupStore(undefined)}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>,
  );
}
