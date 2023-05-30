import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { Root } from "./views";
import { Contacts } from "../contact-management/views";
import { CreateContact } from "../contact-management/views/create-contact";
import { DiseaseTracker } from "../disease-tracker/views/disease-tracker";

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
        path: "contacts/create-contact",
        element: <CreateContact />,
      },
      {
        path: "disease-tracker",
        element: <DiseaseTracker />,
      },
    ],
  },
]);
