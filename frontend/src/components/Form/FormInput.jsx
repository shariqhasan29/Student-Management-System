import "./forminput.scss"

const FormInput = (props) => {

    const {label, onChange, id, ...others} = props

  return (
    <div className="forminputs">

      <div className="input">

        <label>{label}</label>
        <input {...others} onChange={onChange} />

      </div>


        
    </div>
  )
}

export default FormInput