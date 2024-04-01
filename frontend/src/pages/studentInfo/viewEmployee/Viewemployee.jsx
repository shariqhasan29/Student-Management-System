import Sidebar from "../../../components/sidebar/Sidebar"
import { Link } from "react-router-dom"
import PersonAddAltOutlined from '@mui/icons-material/PersonAddAltOutlined'
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined'

const Viewemployee = () => {
  return (
    <div className='addstudent'>
    <Sidebar/>
    <div className="addstudentcontainer">
      <h3 className='heading'>Employee Data</h3>

      <div className="cards">

        <Link to='/addEmployee' style={{textDecoration:'none'}}>
          <div className="add">
            <PersonAddAltOutlined className='icon'/>
            <span>Add Employee</span>
          </div>
        </Link>

        <Link to='/viewEmployee' style={{textDecoration:'none'}}>
          <div className="view">
            <RemoveRedEyeOutlined className='icon'/>
            <span>View Employee</span>
          </div>
        </Link>


      </div>
      
    </div>

    </div>
  )
}

export default Viewemployee