import React from 'react'

function CreateUser() {
  return (
    <div>
    <h3>Create New User</h3>
    <form >
      <div className="form-group"> 
        <label>Username: </label>
        <input  type="text"
            required
            className="form-control"
            />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary" />
      </div>
    </form>
  </div>
  )
}

export default CreateUser