import { createRoot } from "react-dom/client";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

createRoot(document.getElementById("root")!).render(<>Implement Me!</>);
