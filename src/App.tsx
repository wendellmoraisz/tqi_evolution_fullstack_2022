import SideBarMenu from './components/sideMenu';
import AppRoutes from './routes';

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SideBarMenu />
      <AppRoutes/>
    </div>
  );
}

export default App;
