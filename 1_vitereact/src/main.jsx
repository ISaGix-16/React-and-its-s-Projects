import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const anotherUser = "Itachi Uchiha";

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit Google.",
//   anotherUser,
// );

// -> this is how react render works similar to our customRender

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
