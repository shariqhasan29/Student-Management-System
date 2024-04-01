import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import './addstudent.scss'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Form from '../../../components/addStuForm/From'
import { Link } from 'react-router-dom';

const Addstudent = () => {
  return (
    <div className='addstudent'>
      <Sidebar/>
      <div className="addstudentcontainer">
        <h3 className='heading'>Student Entry Form</h3>

        <div className="cards">

          <Link to='/addStudent' style={{textDecoration:'none'}}>
            <div className="add">
              <PersonAddAltOutlinedIcon className='icon'/>
              <span>Add Students</span>
            </div>
          </Link>

          <Link to='/viewStudent' style={{textDecoration:'none'}}>
            <div className="view">
              <RemoveRedEyeOutlinedIcon className='icon'/>
              <span>View Students</span>
            </div>
          </Link>


        </div>
        <div className="form">
          <Form/>
        </div>
      </div>

    </div>
  )
}

export default Addstudent