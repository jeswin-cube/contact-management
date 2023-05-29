import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../features/routing";
import { Provider } from "react-redux";
import { contactStore } from "../features/contact-management/stores";

function App() {
  return (
    <Provider store={contactStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
