import React from "react";
import DragDrop from "./Dropzone";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <div className="header">
        <img src={require("../assets/FinTrackLogo.png")} className="logo" />
      </div>
      <div className="main-body">
        <div className="left-side">
          <p className="left-header">
            Upload a Financial Statements
            <br /> Below
          </p>
          <br></br>
          <div className="left-drop">
            <DragDrop />
          </div>
          <div className="button-container">
            <Link to="/dashboard" className="link">
              <Button
                variant="contained"
                className="button"
                sx={{
                  background: "#3c81d3",
                  fontSize: "20px",
                  fontFamily: "Red Hat Display",
                  fontWeight: "700",
                  textTransform: "none",
                }}
              >
                Analyse Funds
              </Button>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <img
            src={require("../assets/illustration_1.png")}
            className="illustration1"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
