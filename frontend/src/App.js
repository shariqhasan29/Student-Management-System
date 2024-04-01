import Dashboard from "./pages/dashboard/Dashboard"
import Addstudent from "./pages/studentInfo/addStudent/Addstudent"
import Viewstudent from "./pages/studentInfo/viewStudent/ViewStudent"
import Addemployee from "./pages/studentInfo/addEmployee/Addemployee"
import Viewemployee from "./pages/studentInfo/viewEmployee/Viewemployee"
import Addattendance from "./pages/attendance/addAttendance/Addattendance"
import Viewattendance from "./pages/attendance/viewAttendance/ViewAttendance"
import Receipt from "./pages/receipt/Receipt"
import Createcustomer from "./pages/billing/createCustomer/Createcustomer"
import Gst from "./pages/billing/gst/Gst"
import Nongst from "./pages/billing/nonGst/Nongst"



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element ={<Dashboard/>}/>
            <Route path="addStudent" element = {<Addstudent/>}/>
            <Route path="viewStudent" element = {<Viewstudent/>}/>
            <Route path="addEmployee" element = {<Addemployee/>}/>
            <Route path="viewEmployee" element = {<Viewemployee/>}/>
            <Route path="addAttendance" element = {<Addattendance/>}/>
            <Route path="viewAttendance" element = {<Viewattendance/>}/>
            <Route path="receipt" element = {<Receipt/>}/>
            <Route path="createCustomer" element = {<Createcustomer/>}/>
            <Route path="gst" element = {<Gst/>}/>
            <Route path="nonGst" element = {<Nongst/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
