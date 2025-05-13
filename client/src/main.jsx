import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import {Provider} from 'react-redux'
import { store } from "./store/store.js";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  </StrictMode>
);
