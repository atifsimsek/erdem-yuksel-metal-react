import HomePage from "./Pages/HomePage/HomePage";
import { useRoutes } from "react-router-dom"
import routes from './routes';
function App() {
  return (
    useRoutes(routes)
  );
}

export default App;
