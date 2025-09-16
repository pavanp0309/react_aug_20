import React, { Suspense } from "react";
// import Shop from "./pages/Shop";
import { BrowserRouter } from "react-router-dom";
// import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import PageNotFound from "./pages/PageNotFound";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// lazy Loading
let Shop=React.lazy(()=>import("./pages/Shop"))
let Home=React.lazy(()=>import("./pages/Home"))
let About=React.lazy(()=>import("./pages/About"))
let Contact=React.lazy(()=>import("./pages/Contact"))
let Services=React.lazy(()=>import("./pages/Services"))
let PageNotFound=React.lazy(()=>import("./pages/PageNotFound"))
let PrivacyPolicy=React.lazy(()=>import("./pages/PrivacyPolicy"))
let ProductDetails=React.lazy(()=>import("./components/ProductDetails"))
import "./App.css"


import { Navigate } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
       <Suspense fallback={<div class="loader"></div>}>
             <Routes>
          {/*static Routing */}
          <Route path="/" element={<Navigate to={"/shop"} />} />
          <Route to={"/home"} element={<Home />} />
          <Route to={"/about"} element={<About />} />
          <Route to={"/contact"} element={<Contact />} />
          <Route to={"/services"} element={<Services />} />
          <Route to={"/privacy"} element={<PrivacyPolicy />} />
          {/* dynamic Routing */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          {/* Error Handling */}
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
       </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
