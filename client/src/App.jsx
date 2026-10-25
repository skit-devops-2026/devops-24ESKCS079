import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/patients";

const EMPTY_FORM = {
  name: "",
  age: "",
  gender: "",
  email: "",
  phone: "",
  condition: "",
};

function App() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState(EMPTY_FORM);

  // Fetch all patients from the backend
  async function fetchPatients() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch patients.");
      }

      setPatients(result.data || []);
    } catch (err) {
      setError(
        "Unable to load patients. Check whether the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPatients();
  }, []);

  // Handle changes in form fields
  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Open the form for adding a patient
  function openAddForm() {
    setFormData(EMPTY_FORM);
    setEditingId(null);
    setShowForm(true);
    setError("");
    setSuccess("");
  }

  // Open the form for editing a patient
  function handleEditPatient(patient) {
    setFormData({
      name: patient.name || "",
      age: String(patient.age ?? ""),
      gender: patient.gender || "",
      email: patient.email || "",
      phone: patient.phone || "",
      condition: patient.condition || "",
    });

    setEditingId(patient.id);
    setShowForm(true);
    setError("");
    setSuccess("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Close and reset the form
  function closeForm() {
    setShowForm(false);
    setEditingId(null);
    setFormData(EMPTY_FORM);
  }

  // Add or update a patient
  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const isEditing = editingId !== null;

      const response = await fetch(
        isEditing ? `${API_URL}/${editingId}` : API_URL,
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            age: Number(formData.age),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            `Unable to ${isEditing ? "update" : "add"} patient.`
        );
      }

      closeForm();
      await fetchPatients();

      setSuccess(
        isEditing
          ? "Patient updated successfully."
          : "Patient added successfully."
      );
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  // Delete a patient
  async function handleDeletePatient(patient) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${patient.name}'s record?`
    );

    if (!confirmed) return;

    setDeletingId(patient.id);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_URL}/${patient.id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to delete patient.");
      }

      if (editingId === patient.id) {
        closeForm();
      }

      await fetchPatients();
      setSuccess("Patient deleted successfully.");
    } catch (err) {
      setError(err.message || "Unable to delete patient.");
    } finally {
      setDeletingId(null);
    }
  }

  // Filter patients by name, email, phone, or condition
  const filteredPatients = patients.filter((patient) => {
    const query = search.trim().toLowerCase();

    return [
      patient.name,
      patient.email,
      patient.phone,
      patient.condition,
      String(patient.id),
    ].some((value) => String(value || "").toLowerCase().includes(query));
  });

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">✚</div>

          <div>
            <h1>
              MEDCARE<span>++</span>
            </h1>
            <p>Healthcare Management System</p>
          </div>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          System Online
        </div>
      </header>

      <main className="main-content">
        {/* Dashboard heading and action buttons */}
        <section className="welcome-section">
          <div>
            <p className="eyebrow">PATIENT MANAGEMENT</p>
            <h2>Patient Directory</h2>
            <p className="subtitle">
              View and manage patient records from one place.
            </p>
          </div>

          <div className="action-buttons">
            <button
              className="refresh-button"
              onClick={fetchPatients}
              disabled={loading}
            >
              ↻ Refresh Patients
            </button>

            <button className="add-button" onClick={openAddForm}>
              + Add Patient
            </button>
          </div>
        </section>

        {/* Success and error notifications */}
        {success && (
          <div className="success-message" role="status">
            {success}
          </div>
        )}

        {error && (
          <div className="error-banner" role="alert">
            {error}
          </div>
        )}

        {/* Add and edit patient form */}
        {showForm && (
          <section className="form-section">
            <div className="form-heading">
              <div>
                <p className="eyebrow">
                  {editingId !== null ? "UPDATE RECORD" : "NEW RECORD"}
                </p>

                <h3>
                  {editingId !== null ? "Edit Patient" : "Add New Patient"}
                </h3>

                <p className="subtitle">
                  Enter the patient's information below.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="age">Age *</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="0"
                    max="150"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="condition">Medical Condition</label>
                  <input
                    id="condition"
                    name="condition"
                    type="text"
                    placeholder="e.g. Fever, General Checkup"
                    value={formData.condition}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="add-button"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editingId !== null
                      ? "Update Patient"
                      : "Save Patient"}
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Dashboard statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <p>Total Patients</p>
            <h3>{patients.length}</h3>
            <span>Records available</span>
          </div>

          <div className="stat-card">
            <p>Backend Status</p>
            <h3 className={error ? "offline-text" : "online-text"}>
              {error ? "Check Connection" : loading ? "Checking..." : "Connected"}
            </h3>
            <span>Express API · Port 5000</span>
          </div>

          <div className="stat-card">
            <p>Data Storage</p>
            <h3>In-Memory</h3>
            <span>Temporary storage</span>
          </div>
        </section>

        {/* Patient records table */}
        <section className="table-section">
          <div className="table-heading">
            <div>
              <h3>Patient Records</h3>
              <p>Patient information retrieved from the backend API</p>
            </div>

            <span className="record-count">
              {filteredPatients.length}{" "}
              {filteredPatients.length === 1 ? "record" : "records"}
            </span>
          </div>

          {/* Search field */}
          <div className="search-container">
            <input
              type="search"
              className="patient-search"
              placeholder="Search by name, email, phone, condition, or ID..."
              aria-label="Search patients"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          {loading ? (
            <div className="message-box">Loading patient records...</div>
          ) : patients.length === 0 ? (
            <div className="message-box">
              No patients found. Click Add Patient to create a record.
            </div>
          ) : filteredPatients.length === 0 ? (
            <div className="message-box">
              No patients match your search.
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Condition</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id}>
                      <td>
                        <span className="patient-id">#{patient.id}</span>
                      </td>

                      <td className="patient-name">{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.email}</td>
                      <td>{patient.phone}</td>

                      <td>
                        <span className="condition-badge">
                          {patient.condition || "Not specified"}
                        </span>
                      </td>

                      <td>
                        <div className="row-actions">
                          <button
                            type="button"
                            className="edit-button"
                            onClick={() => handleEditPatient(patient)}
                            disabled={deletingId !== null}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="delete-button"
                            onClick={() => handleDeletePatient(patient)}
                            disabled={deletingId === patient.id}
                          >
                            {deletingId === patient.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer>
          <span>MEDCARE++</span>
          <span>React + Express · Development Environment</span>
        </footer>
      </main>
    </div>
  );
}

export default App;