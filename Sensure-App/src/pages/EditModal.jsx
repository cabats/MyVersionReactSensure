// EditModal.jsx
import React from "react";
import "../components/css/EditModal.css";  // Optional for styling

export default function EditModal({ inputs, handleChange, handleEdit, handleCloseModal }) {
  return (
    
      <div className="modal">
        <h2>Edit Account</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
          <div className="box">
            <div>
              <label>First Name:</label>
              <input type="text" value={inputs.first_name} name="first_name" onChange={handleChange} />
            </div> 
            <div>
              <label>Last Name:</label>
              <input type="text" value={inputs.last_name} name="last_name" onChange={handleChange} />
            </div>
            <div>
              <label>ID Number:</label>
              <input type="text" value={inputs.id_number} name="id_number" onChange={handleChange} />
            </div>

            <div>
            <label>Email:</label>
            <input type="email" value={inputs.email} name="email" onChange={handleChange} />
          </div>
          </div>
          
          <div className="box">
            <div>
              <label>Phone Number:</label>
              <input type="text" value={inputs.phone_number} name="phone_number" onChange={handleChange} />
            </div>

            <div>
              <label>Occupation:</label>
              <input type="text" value={inputs.occupation} name="occupation" onChange={handleChange} />
            </div>

            <div>
              <label>Department:</label>
              <input type="text" value={inputs.department} name="department" onChange={handleChange} />
            </div>
          </div>
         
          <div className="box">
            <div>
              <label>Plate Number:</label>
              <input type="text" value={inputs.plate_number} name="plate_number" onChange={handleChange} />
            </div>

            <div>
              <label>Motor Brand:</label>
              <input type="text" value={inputs.motor_brand} name="motor_brand" onChange={handleChange} />
            </div>

            <div>
              <label>Motor Color:</label>
              <input type="text" value={inputs.motor_color} name="motor_color" onChange={handleChange} />
            </div>

            <div>
              <label>Motor Series:</label>
              <input type="text" value={inputs.motor_series} name="motor_series" onChange={handleChange} />
            </div>
          </div>
          
          <div className="modal-actions">
            <button type="submit" onClick={handleEdit}>Update</button>
            <button type="button" onClick={handleCloseModal}>Cancel</button>
          </div>
        </form>
      </div>
    
  );
}
