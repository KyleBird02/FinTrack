import React from "react";
import { Link } from "react-router-dom";
import DonutChart from "react-donut-chart";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header-shark">
        <img src={require("../assets/Shark.png")} className="logo-shark" />
      </div>
      <div className="dash-body">
        <div className="dash-header">
          <p>Report for (Account Number)</p>
        </div>
        <div className="row">
          <div className="left-sidedash column">
            <div className="donut-chart">
              <div className="donut-header">
                <p>Funds Disparity</p>
              </div>
              <DonutChart
                data={[
                  {
                    label: "Flagged Transactions",
                    value: 11,
                    className: "flagged",
                  },
                  {
                    label: "Standard Transactions",
                    value: 24,
                    className: "standard",
                  },
                  {
                    label: "Moderate Transactions",
                    value: 26,
                    className: "moderate",
                  },
                  {
                    label: "High Transactions",
                    value: 39,
                    className: "high",
                  },
                ]}
                className="donut"
              />
            </div>
          </div>
          <div className="right-sidedash column">
            <div className="transactions">
              <div className="trans-header">
                <span className="row">
                  <p className="column">Latest Transactions</p>
                  <Link to="/analysis" className="link">
                    <p className="view-all">View All</p>
                  </Link>
                </span>
              </div>
              <div className="trans-body row">
                <div className="transaction-list column">
                  <p className="trans-item">ABSBCJSNQBWDBDWBEJSBSDABBSBADJ</p>
                  <p className="trans-item">ABSBCJSNQBWDBDWBEJSBSDABBSBADJ</p>
                  <p className="trans-item">ABSBCJSNQBWDBDWBEJSBSDABBSBADJ</p>
                  <p className="trans-item">ABSBCJSNQBWDBDWBEJSBSDABBSBADJ</p>
                  <p className="trans-item">ABSBCJSNQBWDBDWBEJSBSDABBSBADJ</p>
                  <p className="trans-item">ABSBCJSNQBWDBDWBEJSBSDABBSBADJ</p>
                </div>
                <div className="transaction-list column">
                  <p className="trans-amt green">+ ₹20.00</p>
                  <p className="trans-amt red">- ₹40.00</p>
                  <p className="trans-amt green">+ ₹60.00</p>
                  <p className="trans-amt red">- ₹90.00</p>
                  <p className="trans-amt green">+ ₹60.00</p>
                  <p className="trans-amt red">- ₹90.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="financial-overview">
          <div className="finance-header">
            <p>Financial Overview</p>
          </div>
          <div className="card-holder">
            <div className="card">
              <div className="card-content">
                <div className="card-header">
                  <p>Total Incomings</p>
                </div>
                <div className="card-amt">
                  <p>₹1200.00</p>
                </div>
                <div className="card-footer">
                  <p className="green">
                    +21.01%{" "}
                    <span>
                      <img src={require("../assets/Arrow.png")} />
                    </span>{" "}
                    <span className="card-comp">compared to median</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-header">
                  <p>Total Outgoings</p>
                </div>
                <div className="card-amt">
                  <p>₹4200.00</p>
                </div>
                <div className="card-footer">
                  <p className="red">
                    -7.69%{" "}
                    <span>
                      <img src={require("../assets/Arrow_red.png")} />
                    </span>{" "}
                    <span className="card-comp">compared to median</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-header">
                  <p>Fraud Rating Score (FRS)</p>
                </div>
                <div className="card-amt">
                  <p>92.00%</p>
                </div>
                <div className="card-footer">
                  <p className="green">
                    +4.20%{" "}
                    <span>
                      <img src={require("../assets/Arrow.png")} />
                    </span>{" "}
                    <span className="card-comp">compared to median</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer row">
          <div className="back-nav column">
            <Link to="/" className="link">
              <p>
                <span className="back-nav-link">
                  <span className="arrow-left">&lt;</span>{" "}
                  <span className="back-text">Upload Another Statement</span>
                </span>
              </p>
            </Link>
          </div>
          <p className="front-nav column">
            <Link to="/analysis" className="link">
              <p>
                <span className="front-nav-link">
                  <span className="front-text">Detailed Analysis</span>
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

export default Dashboard;
