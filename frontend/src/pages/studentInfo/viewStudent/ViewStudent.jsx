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
      <h3 className='heading'>Student Entry Form</h3>

      <div className="cards">

        <Link to='/addStudent' style={{textDecoration:'none'}}>
          <div className="add">
            <PersonAddAltOutlined className='icon'/>
            <span>add Student</span>
          </div>
        </Link>

        <Link to='/viewStudent' style={{textDecoration:'none'}}>
          <div className="view">
            <RemoveRedEyeOutlined className='icon'/>
            <span>view Student</span>
          </div>
        </Link>


      </div>
      
    </div>

  </div>
  )
}

export default ViewStudent