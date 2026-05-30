import React, { useState } from 'react';

export default function AnimalCard({ rabbit, onUpdate, handleDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(rabbit);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editData);
    setShowForm(false);
  };

  return (
    <>
      <div className="Card">
        <img src={rabbit.image} alt={rabbit.name} />
        <div className="card-body">
          <h3>{rabbit.name}</h3>
          <div className="card-badges">
            <span className="badge badge-gender">{rabbit.gender}</span>
            <span className={`badge ${rabbit.served ? 'badge-served' : 'badge-not-served'}`}>
              {rabbit.served ? 'Served' : 'Not Served'}
            </span>
          </div>
          <button className="card-view-btn" onClick={() => setShowModal(true)}>View Details</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>{rabbit.name}</h2>
            <img src={rabbit.image} alt={rabbit.name} className="modal-image" />
            <div className="modal-details">
              <p><strong>Gender:</strong> {rabbit.gender}</p>
              <p><strong>Served:</strong> {rabbit.served ? 'Yes' : 'No'}</p>
              {rabbit.dateServed && <p><strong>Date Served:</strong> {rabbit.dateServed}</p>}
              {rabbit.probableBirthDate && <p><strong>Probable Birth Date:</strong> {rabbit.probableBirthDate}</p>}
            </div>
            <div className="modal-actions">
              <button className="updateBtn" onClick={() => setShowForm(prev => !prev)}>
                {showForm ? 'Cancel' : 'Edit Rabbit'}
              </button>
              <button className="deleteBtn" onClick={() => { handleDelete(rabbit.id); setShowModal(false); }}>
                Remove
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="edit-form">
                <input type="text" name="name" value={editData.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="image" value={editData.image} onChange={handleChange} placeholder="Image URL" />
                <select name="gender" value={editData.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label>
                  <input type="checkbox" name="served" checked={editData.served} onChange={handleChange} />
                  Served
                </label>
                <input type="date" name="dateServed" value={editData.dateServed} onChange={handleChange} />
                <input type="date" name="probableBirthDate" value={editData.probableBirthDate} onChange={handleChange} />
                <button type="submit" className="save-btn">Save Changes</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
