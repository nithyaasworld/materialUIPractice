import "./App.css";
import SideBarDrawer from "./SideBarDrawer";
import TopAppBar from "./TopAppBar";

function App() {
  const appStyles = {
    display: "flex",
    flexDirection: "row",
  };
  const sideBarStyles = {
    width: "250px",
    border: "1px solid black",
    backgroundColor: "#263053",
    height: "100vh",
  };
  return (
    <div style={appStyles}>
     <SideBarDrawer/>
      <div>hi hi hih ihii ha dhihihih dfhsda fshdihasdfh</div>
    </div>
  );
}

export default App;
