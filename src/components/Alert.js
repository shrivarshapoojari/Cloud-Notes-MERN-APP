import React from 'react'

 function Alert(props) {
  
  const capitalize=(word)=>{
    if(word=='danger')
    {
        word='Error'
        return word
    }
    else{
        return "Success"
    }
  }
  return (
    <div style={{ height: '50px' }}>
    {props.alert && (
      <div className={`custom-alert alert alert-${props.alert.type}`} role="alert">
        <div className="alert-content">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )}
  </div>
  


     
  )
}
export default Alert



