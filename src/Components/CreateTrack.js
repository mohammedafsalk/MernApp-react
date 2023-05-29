import React from "react";


function CreateTrack() {
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form >
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
          >
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTrack;
