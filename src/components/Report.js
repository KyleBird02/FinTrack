import React from "react";
import GaugeChart from "react-gauge-chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Report() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      window.location.href = "http://localhost:3000/";
    }, 2000);
  };

  const handleClicker = () => {
    window.print();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="report">
      <div className="header-shark">
        <img src={require("../assets/Shark.png")} className="logo-shark" />
      </div>
      <div className="report-body">
        <div className="dash-header">
          <p>Report for 12345678901</p>
        </div>
        <div>
          <div className="donut-header">
            <p>Fraud Rating Score (FRS)</p>
          </div>
          <div className="row">
            <div className="chart-container">
              <GaugeChart
                id="gauge-chart5"
                nrOfLevels={420}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                percent={0.92}
                arcPadding={0.02}
                textColor="#000000"
              />
            </div>
            <div className="rec col">
              <div className="card-report">
                <div className="card-content">
                  <div className="card-amt report-percent">
                    <p>92.38%</p>
                  </div>
                  <div className="card-footer">
                    <p className="green">
                      <span className="card-comp2">
                        A FRS score of 92% indicates that there is high
                        confidence in the indicated transactions of suspected
                        fraudulence.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="donut-header">
            <p>All Flagged Transactions</p>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-header">Date</TableCell>
                  <TableCell className="table-header">Transaction ID</TableCell>
                  <TableCell className="table-header">Ref. No.</TableCell>
                  <TableCell className="table-header">Withdrawal</TableCell>
                  <TableCell className="table-header">Deposit</TableCell>
                  <TableCell className="table-header">
                    Closing Balance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow id="fourth">
                  <TableCell>29 Mar 2023</TableCell>
                  <TableCell>345228375685</TableCell>
                  <TableCell>345228375685</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>10,000.00</TableCell>
                  <TableCell>1,08,500.00</TableCell>
                </TableRow>
                <TableRow id="fifth">
                  <TableCell>30 Mar 2023</TableCell>
                  <TableCell>345228375686</TableCell>
                  <TableCell>345228375686</TableCell>
                  <TableCell>10,000.00</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>98,500.00</TableCell>
                </TableRow>
                <TableRow id="fourth">
                  <TableCell>29 Mar 2023</TableCell>
                  <TableCell>345228375685</TableCell>
                  <TableCell>345228375685</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>10,000.00</TableCell>
                  <TableCell>1,07,500.00</TableCell>
                </TableRow>
                <TableRow id="fifth">
                  <TableCell>30 Mar 2023</TableCell>
                  <TableCell>345228375686</TableCell>
                  <TableCell>345228375686</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>10,000.00</TableCell>
                  <TableCell>1,08,500.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="row">
            <div className="column">
              <div className="donut-header">
                <p>Report Generation Details</p>
              </div>
              <div className="report-bottom">
                <p className="report-generation-dets-title">
                  Reviewer Name:{" "}
                  <span className="report-generation-dets">Kyle Dsouza</span>
                </p>
                <p className="report-generation-dets-title">
                  Review Date:{" "}
                  <span className="report-generation-dets hai">04/04/2023</span>
                </p>
                <p className="report-generation-dets-title">
                  Review Reason:{" "}
                  <span className="report-generation-dets">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Reason"
                      variant="outlined"
                      className="text"
                      multiline
                      maxRows={4}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="column">
              <div className="donut-header">
                <p>Digital Signature</p>
                <img
                  src={require("../assets/Kyle_Signature.png")}
                  className="dig-sig"
                />
              </div>
            </div>
          </div>
          <div className="one-line">
            <div className="btn-container">
              {/* <Link to="/" className="link">
                <Button
                  variant="contained"
                  className="button-save"
                  onClick={handleClick}
                  sx={{
                    background: "#157347",
                    fontSize: "20px",
                    fontFamily: "Red Hat Display",
                    fontWeight: "700",
                    textTransform: "none",
                  }}
                >
                  Save
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    This is a success message!
                  </Alert>
                </Snackbar>
              </Link> */}
              <Button
                variant="contained"
                className="button-save"
                onClick={handleClick}
                sx={{
                  background: "#157347",
                  fontSize: "20px",
                  fontFamily: "Red Hat Display",
                  fontWeight: "700",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Report has been saved!
                </Alert>
              </Snackbar>
            </div>
            <div className="btn-container">
              <Button
                variant="contained"
                className="button-print"
                onClick={handleClicker}
                sx={{
                  background: "#3c81d3",
                  fontSize: "20px",
                  fontFamily: "Red Hat Display",
                  fontWeight: "700",
                  textTransform: "none",
                }}
              >
                Print
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
