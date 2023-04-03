import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

function Analysis() {
  function handleFlag(id) {
    document.getElementById(id).style.backgroundColor = "#ff718b";
  }
  function handleClear(id) {
    document.getElementById(id).style.backgroundColor = "#ffffff";
  }
  return (
    <div className="analysis">
      <div className="header-shark">
        <img src={require("../assets/Shark.png")} className="logo-shark" />
      </div>
      <div className="analysis-body">
        <div className="dash-header">
          <p>Report for (Account Number)</p>
        </div>
        <div className="donut-header">
          <p>Detailed Overview</p>
          <p>Statement_1:</p>
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
                <TableCell className="table-header">Closing Balance</TableCell>
                <TableCell className="table-header">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow id="first">
                <TableCell>27 Mar 2023</TableCell>
                <TableCell>345228375682</TableCell>
                <TableCell>345228375682</TableCell>
                <TableCell>10000.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>1,00,000.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("first")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("first")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="second">
                <TableCell>27 Mar 2023</TableCell>
                <TableCell>345228375683</TableCell>
                <TableCell>345228375683</TableCell>
                <TableCell>2000.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>98,000.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("second")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("second")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="third">
                <TableCell>28 Mar 2023</TableCell>
                <TableCell>345228375684</TableCell>
                <TableCell>345228375684</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>500.00</TableCell>
                <TableCell>98,500.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("third")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("third")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="fourth" className="red-row">
                <TableCell>29 Mar 2023</TableCell>
                <TableCell>345228375685</TableCell>
                <TableCell>345228375685</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>10,000.00</TableCell>
                <TableCell>1,08,500.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("fourth")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("fourth")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="fifth" className="red-row">
                <TableCell>30 Mar 2023</TableCell>
                <TableCell>345228375686</TableCell>
                <TableCell>345228375686</TableCell>
                <TableCell>10,000.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>98,500.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("fifth")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("fifth")}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
            {/* <TableBody> */}
            {/* {rows.map((row) => (
									<TableRow
										key={row.product_id}
										sx={{
											"&:last-child td, &:last-child th":
												{ border: 0 },
										}}
										>
										<TableCell component="th" scope="row" className="table-body">
											{row.product_id}
										</TableCell>
										<TableCell className="table-body">
											{row.stock}
										</TableCell>
										<TableCell className="table-body">
											{row.reorder}
										</TableCell>
										<TableCell className="table-body">
											{row.supplier_id}
										</TableCell>
										<TableCell className="action-buttons">
										<Button onClick={()=>handleOpen(row)}>
                    					<img src={editIcon} alt="" className="action-button"/>
										</Button>
										<button className="reorder-button" onClick={()=>getShipment({...row,"stock":row.stock+row.reorder_qty},refresh,setRefresh,setOpenSnack)}>Reorder</button>
										</TableCell>
									</TableRow>
								))} */}
            {/* </TableBody> */}
          </Table>
        </TableContainer>
        <div className="donut-header">
          <p>Statement_2:</p>
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
                <TableCell className="table-header">Closing Balance</TableCell>
                <TableCell className="table-header">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow id="first">
                <TableCell>27 Mar 2023</TableCell>
                <TableCell>345228375682</TableCell>
                <TableCell>345228375682</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>10,000.00</TableCell>
                <TableCell>1,00,000.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("first")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("first")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="second">
                <TableCell>27 Mar 2023</TableCell>
                <TableCell>345228375693</TableCell>
                <TableCell>345228375693</TableCell>
                <TableCell>3,000.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>97,000.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("second")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("second")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="third">
                <TableCell>28 Mar 2023</TableCell>
                <TableCell>345228375695</TableCell>
                <TableCell>345228375695</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>500.00</TableCell>
                <TableCell>97,500.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("third")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("third")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="fourth" className="red-row">
                <TableCell>29 Mar 2023</TableCell>
                <TableCell>345228375685</TableCell>
                <TableCell>345228375685</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>10,000.00</TableCell>
                <TableCell>1,07,500.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("fourth")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("fourth")}
                  />
                </TableCell>
              </TableRow>
              <TableRow id="fifth" className="red-row">
                <TableCell>30 Mar 2023</TableCell>
                <TableCell>345228375686</TableCell>
                <TableCell>345228375686</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>10,000.00</TableCell>
                <TableCell>1,08,500.00</TableCell>
                <TableCell>
                  <img
                    src={require("../assets/red_flag.png")}
                    className="flag"
                    onClick={() => handleFlag("fifth")}
                  />
                  <img
                    src={require("../assets/clear.png")}
                    className="clear"
                    onClick={() => handleClear("fifth")}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
            {/* <TableBody> */}
            {/* {rows.map((row) => (
									<TableRow
										key={row.product_id}
										sx={{
											"&:last-child td, &:last-child th":
												{ border: 0 },
										}}
										>
										<TableCell component="th" scope="row" className="table-body">
											{row.product_id}
										</TableCell>
										<TableCell className="table-body">
											{row.stock}
										</TableCell>
										<TableCell className="table-body">
											{row.reorder}
										</TableCell>
										<TableCell className="table-body">
											{row.supplier_id}
										</TableCell>
										<TableCell className="action-buttons">
										<Button onClick={()=>handleOpen(row)}>
                    					<img src={editIcon} alt="" className="action-button"/>
										</Button>
										<button className="reorder-button" onClick={()=>getShipment({...row,"stock":row.stock+row.reorder_qty},refresh,setRefresh,setOpenSnack)}>Reorder</button>
										</TableCell>
									</TableRow>
								))} */}
            {/* </TableBody> */}
          </Table>
        </TableContainer>
        <div className="page-footer row foot">
          <div className="back-nav column">
            <Link to="/dashboard" className="link">
              <p>
                <span className="back-nav-link">
                  <span className="arrow-left">&lt;</span>{" "}
                  <span className="back-text">Dashboard</span>
                </span>
              </p>
            </Link>
          </div>
          <p className="front-nav column">
            <Link to="/report" className="link">
              <p>
                <span className="front-nav-link">
                  <span className="front-text">Get Report</span>
                  <span className="arrow-right">&gt;</span>
                </span>
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
