import "./App.css";
import Button from "@mui/material/Button";
import DragDrop from "../src/components/Dropzone";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={require("../src/assets/FinTrackLogo.png")} className="logo" />
      </div>
      <div className="main-body">
        <div className="left-side">
          <p className="left-header">
            Upload a Financial Statement
            <br /> Below
          </p>
          <br></br>
          <div className="left-drop">
            <DragDrop />
          </div>
          <div className="button-container">
            <Button variant="contained" className="button" sx={{background: "#3c81d3", fontSize:"20px", fontFamily:"Red Hat Display", fontWeight:"700", textTransform:"none"}}>
              Analyse Funds
            </Button>
          </div>
        </div>
        <div className="right-side">
          <img
            src={require("../src/assets/illustration_1.png")}
            className="illustration1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
