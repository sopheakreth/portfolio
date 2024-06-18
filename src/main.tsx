import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/fonts/font-siemreap.css";
import "./index.css";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={"lang"}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
