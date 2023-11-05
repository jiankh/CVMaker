
function InputField({label, placeholder, type, id, value, onChange}) {
  return (
    (type === "textarea") ? 
    (<div className="input-wrapper">
        <label htmlFor={id}>
            <div>{label}</div>
        </label>
        <textarea
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            value={value}
            cols="40" 
            rows="5" 
         />
    </div>) :
    (<div className="input-wrapper">
        <label htmlFor={id}>
            <div>{label}</div>
        </label>
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            value={value}

        />
    </div>)
  )
}

export default InputField