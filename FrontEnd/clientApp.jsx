import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import storeDetails from "./store/index";
import { defaultRouterData } from "./routers/RouterPath";

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <Provider store={storeDetails}>
      <RouterProvider router={defaultRouterData}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
