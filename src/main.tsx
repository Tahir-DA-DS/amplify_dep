import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.ts"; 
import "./index.css";
import App from "./App.tsx";
import "@aws-amplify/ui-react/styles.css"; // Optional: UI styles for Amplify components

// Configure AWS Amplify
Amplify.configure(awsExports);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);