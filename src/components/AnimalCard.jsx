import React, { useState } from 'react';

export default function AnimalCard({ rabbit, onUpdate, handleDelete }) {
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(rabbit); // initial form data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editData);
    setShowForm(false); // hide form after update
  };



  return (
    <div className="animalcard-wrapper">
      <div className="Card">
      <h2>{rabbit.name}</h2>
      <img src={rabbit.image} alt={rabbit.name} />
      <p><strong>Gender:</strong> {rabbit.gender}</p>
      <p><strong>Is the rabbit served:</strong> {rabbit.served ? 'Yes' : 'No'}</p>
      <p><strong>Date when the rabbit was served:</strong> {rabbit.dateServed}</p>
      <p><strong>Probable date of birth:</strong> {rabbit.probableBirthDate}</p>


        
        
         
      <button className="deleteBtn"  style={{backgroundColor:'greenyellow',borderRadius:'20px' }} onClick={() => handleDelete(rabbit.id)}> 
 Remove Rabbit</button>
      <button className="updateBtn"  style={{backgroundColor:'greenyellow',borderRadius:'20px' }} onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? 'Cancel Edit' : 'Update Rabbit'}
      </button>


      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="image"
            value={editData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <input
            type="text"
            name="gender"
            value={editData.gender}
            onChange={handleChange}
            placeholder="Gender"
          />
          <label>
            <input
              type="checkbox"
              name="served"
              checked={editData.served}
              onChange={handleChange}
            />
            Served
          </label>
          <input
            type="date"
            name="dateServed"
            value={editData.dateServed}
            onChange={handleChange}
          />
          <input
            type="date"
            name="probableBirthDate"
            value={editData.probableBirthDate}
            onChange={handleChange}
          />
          <button type="submit">Save Changes</button>
        </form>
      )}</div>
    </div>
  );
}
