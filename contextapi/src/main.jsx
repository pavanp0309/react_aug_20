import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./store/Store.jsx";
import ProfileProvider from "./store/ProfileContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProfileProvider>
    <ThemeProvider>
      <App /> {/* childremn element of ThemeProvider */}
    </ThemeProvider>
  </ProfileProvider>
);
