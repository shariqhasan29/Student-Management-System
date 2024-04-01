import "./sidebar.scss";
import Accordion from "react-bootstrap/Accordion";
import logo from "./kitkat.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import Groups3Icon from "@mui/icons-material/Groups3";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src={logo} width="200px" height="100px" alt="logo" />
        </span>
      </div>

      <div className="center">
        <Accordion>
          <ul>
            <li>
              <Accordion.Item eventKey="0">
              <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                <Accordion.Header>
                  <span>
                    <DashboardIcon />
                  </span>
                  Dashboard
                  
                    
                 
                </Accordion.Header>
                </Link>
              </Accordion.Item>
            </li>

            <li>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span>
                    <SettingsAccessibilityIcon />
                  </span>
                  Personal Information
                </Accordion.Header>
                <Link
                  to="/addStudent"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>Add Student</Accordion.Body>
                </Link>
                <Link
                  to="/viewStudent"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>View Student</Accordion.Body>
                </Link>
                <Link
                  to="/addEmployee"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>Add Employee</Accordion.Body>
                </Link>
                <Link
                  to="/viewEmployee"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>View Employee</Accordion.Body>
                </Link>
              </Accordion.Item>
            </li>

            <li>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span>
                    <Groups3Icon />
                  </span>Attendance
                </Accordion.Header>
                <Link
                  to="/addAttendance"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>Add Attendance</Accordion.Body>
                </Link>
                <Link
                  to="/viewAttendance"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>View Attendance</Accordion.Body>
                </Link>
              </Accordion.Item>
            </li>
            <li>
              <Accordion.Item eventKey="3">
              <Link
                    to="/Receipt"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                <Accordion.Header>
                  <span>
                    <ReceiptLongIcon />
                  </span>
                  
                    Receipt
                  
                  
                </Accordion.Header>
                </Link>
              </Accordion.Item>
            </li>
            <li>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span>
                    <AttachMoneyIcon />
                  </span>
                    Billing
                </Accordion.Header>
                <Link
                  to="/createCustomer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>Create Customer</Accordion.Body>
                </Link>
                <Link
                  to="/gst"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>GST</Accordion.Body>
                </Link>
                <Link
                  to="/nonGst"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Accordion.Body>Non-GST</Accordion.Body>
                </Link>
              </Accordion.Item>
            </li>
          </ul>
        </Accordion>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
