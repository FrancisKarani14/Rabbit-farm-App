import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RabbitForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="page-container">
      <Navbar />
      <div className="form-page">
        <div className="formDisplay">
          <h1>🐇 Add a Rabbit</h1>
          <form onSubmit={handleSubmit} className="rabbit-form">
            <div className="form-group">
              <label htmlFor="name">Rabbit Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Snowball"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                type="text"
                name="image"
                placeholder="https://..."
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="served"
                name="served"
                checked={formData.served}
                onChange={handleChange}
              />
              <label htmlFor="served">Rabbit has been served</label>
            </div>

            <div className="form-group">
              <label htmlFor="dateServed">Date Served</label>
              <input
                id="dateServed"
                type="date"
                name="dateServed"
                value={formData.dateServed}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="probableBirthDate">Probable Birth Date</label>
              <input
                id="probableBirthDate"
                type="date"
                name="probableBirthDate"
                value={formData.probableBirthDate}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">Add Rabbit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
