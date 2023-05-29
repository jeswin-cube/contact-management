import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { Root } from "./views";
import { Contacts } from "../contact-management/views";
import { CreateContact } from "../contact-management/views/create-contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "reports",
        element: <></>,
      },
      {
        path: "contacts/create-contact",
        element: <CreateContact />,
      },
    ],
  },
]);
