import Sidebar from "../../../components/sidebar/Sidebar"
import { Link } from "react-router-dom"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Addemployee = () => {
  return (
    <div className='addstudent'>
    <Sidebar/>
    <div className="addstudentcontainer">
      <h3 className='heading'>Employee Entry Form</h3>

      <div className="cards">

        <Link to='/addEmployee' style={{textDecoration:'none'}}>
          <div className="add">
            <PersonAddAltOutlinedIcon className='icon'/>
            <span>Add Employees</span>
          </div>
        </Link>

        <Link to='/viewEmployee' style={{textDecoration:'none'}}>
          <div className="view">
            <RemoveRedEyeOutlinedIcon className='icon'/>
            <span>View Employees</span>
          </div>
        </Link>


      </div>

      <div className="form">
        
      </div>
      
    </div>

    </div>
  )
}

export default Addemployee