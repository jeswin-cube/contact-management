import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../features/routing";
import { Provider } from "react-redux";
import { contactStore } from "../features/contact-management/stores";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={contactStore}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
