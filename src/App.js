import "./App.css";
import SideBarDrawer from "./SideBarDrawer";
import TopAppBar from "./TopAppBar";
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
function App() {

  return (
    <div style={{ display: 'flex' }}>
      <SideBarDrawer />
      <div>
        <TopAppBar/>
      </div>
      <div>
        <AppHeader />
        <AppBody/>
      </div>
    </div>
  );
}

export default App;
