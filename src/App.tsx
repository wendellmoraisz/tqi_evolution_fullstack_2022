import SideBarMenu from './components/sideMenu';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BrowserRouter>
        <SideBarMenu />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
