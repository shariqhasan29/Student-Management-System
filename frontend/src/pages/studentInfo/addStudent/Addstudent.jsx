import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import './addstudent.scss'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FormInput from '../../../components/Form/FormInput';
import Axios from 'axios'

const Addstudent = () => {

  const [values, setValues] = useState({

    fullname:"",
    fathername:"",
    mothername:"",
    email:"",
    address:"",
    dob:"",
    phone:"",
    fphone:"",
    cgpa:"",
    passedout:"",
    amount:"",
  })

  const [file, setFile] = useState('')

  const inputs = [
    {
      id:1,
      name:"fullname",
      type:"text",
      placeholder:"Enter your full name",
      label:"Full Name"
    },
    {
      id:2,
      name:"fathername",
      type:"text",
      placeholder:"Enter your father's name",
      label:"Father's Name"
    },
    {
      id:3,
      name:"mothername",
      type:"text",
      placeholder:"Enter your mother's name",
      label:"Mother's Name"
    },
    {
      id:4,
      name:"email",
      type:"text",
      placeholder:"email",
      label:"Email"
    },
    {
      id:5,
      name:"address",
      type:"text",
      placeholder:"Home Address",
      label:"Address"
    },
    {
      id:6,
      name:"dob",
      type:"date",
      placeholder:"Date of Birth",
      label:"Date of Birth"
    },
    {
      id:7,
      name:"phone",
      type:"text",
      placeholder:"Enter your Contact Number",
      label:"Contact Number"
    },
    {
      id:8,
      name:"fphone",
      type:"text",
      placeholder:"Enter your Father contact number",
      label:"Father's Number"
    },
    {
      id:9,
      name:"cgpa",
      type:"number",
      label:"CGPA % "
    },
    {
      id:10,
      name:"passedout",
      type:"text",
      placeholder:"Passed Out Year",
      label:"Passed Out Year"
    },
    {
      id:11,
      name:"amount",
      type:"text",
      placeholder:"30000",
      label:"Total Amount"
    }
  ]

  const onChange = (e)=>{

    setValues({...values, [e.target.name]:e.target.value})

  }

  const handleSubmit = async(e)=>{
      e.preventDefault()

      // const formData = new FormData()

      // formData.append('file', file)
     

      // const photo = await Axios.post('http://localhost:6969/addStudent', formData)
      const data = await Axios.post('http://localhost:6969/addStudent', values)

      console.log(data);
  }

  

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
          <form onSubmit={handleSubmit}>
            {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value = {values[input.name]} onChange = {onChange}/>
            ))}

            <input type="file" className='file' value = {file.image} onChange={e => setFile(e.target.files[0])}/>

            <button type='submit' >Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Addstudent