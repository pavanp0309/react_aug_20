import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import { InvoiceProvider } from "./context/InvoiceContext.jsx";
import { FormContextProvider } from "./context/invoiceFormContext.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <InvoiceProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
        <ToastContainer />
      </InvoiceProvider>
    </BrowserRouter>
  </>
);
