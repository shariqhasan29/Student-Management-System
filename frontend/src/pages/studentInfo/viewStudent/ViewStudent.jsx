import React from 'react'
// import './viewStudent.scss'
import { Link } from 'react-router-dom'
import Sidebar from '../../../components/sidebar/Sidebar'
import PersonAddAltOutlined from '@mui/icons-material/PersonAddAltOutlined'
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined'

const ViewStudent = () => {
  return (
    <div className='addstudent'>
    <Sidebar/>
    <div className="addstudentcontainer">
      <h3 className='heading'>Students Data</h3>

      <div className="cards">

        <Link to='/addStudent' style={{textDecoration:'none'}}>
          <div className="add">
            <PersonAddAltOutlined className='icon'/>
            <span>Add Students</span>
          </div>
        </Link>

        <Link to='/viewStudent' style={{textDecoration:'none'}}>
          <div className="view">
            <RemoveRedEyeOutlined className='icon'/>
            <span>View Students</span>
          </div>
        </Link>


      </div>
      
    </div>

    </div>
  )
}

export default ViewStudent