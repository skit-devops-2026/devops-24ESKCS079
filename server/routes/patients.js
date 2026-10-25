const express = require("express");
const router = express.Router();

// Temporary in-memory storage.
// Data will reset whenever the backend restarts.
let patients = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 28,
    gender: "Male",
    email: "aarav@example.com",
    phone: "9876543210",
    condition: "General Checkup",
  },
  {
    id: 2,
    name: "Ananya Verma",
    age: 35,
    gender: "Female",
    email: "ananya@example.com",
    phone: "9876501234",
    condition: "Regular Consultation",
  },
];

let nextId = 3;

// CREATE: Add a patient
router.post("/", (req, res) => {
  const { name, age, gender, email, phone, condition } = req.body;

  if (
    !name ||
    age === undefined ||
    age === null ||
    age === "" ||
    !gender ||
    !email ||
    !phone
  ) {
    return res.status(400).json({
      success: false,
      message: "Name, age, gender, email, and phone are required.",
    });
  }

  const parsedAge = Number(age);

  if (!Number.isInteger(parsedAge) || parsedAge < 0 || parsedAge > 150) {
    return res.status(400).json({
      success: false,
      message: "Age must be an integer between 0 and 150.",
    });
  }

  const patient = {
    id: nextId++,
    name: String(name).trim(),
    age: parsedAge,
    gender: String(gender).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    condition: condition ? String(condition).trim() : "",
  };

  patients.push(patient);

  return res.status(201).json({
    success: true,
    message: "Patient created successfully.",
    data: patient,
  });
});

// READ: Get all patients
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: patients.length,
    data: patients,
  });
});

// READ: Get one patient by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const patient = patients.find((item) => item.id === id);

  if (!Number.isInteger(id) || !patient) {
    return res.status(404).json({
      success: false,
      message: "Patient not found.",
    });
  }

  return res.status(200).json({
    success: true,
    data: patient,
  });
});

// UPDATE: Replace editable patient fields
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = patients.findIndex((item) => item.id === id);

  if (!Number.isInteger(id) || index === -1) {
    return res.status(404).json({
      success: false,
      message: "Patient not found.",
    });
  }

  const { name, age, gender, email, phone, condition } = req.body;

  if (
    !name ||
    age === undefined ||
    age === null ||
    age === "" ||
    !gender ||
    !email ||
    !phone
  ) {
    return res.status(400).json({
      success: false,
      message: "Name, age, gender, email, and phone are required.",
    });
  }

  const parsedAge = Number(age);

  if (!Number.isInteger(parsedAge) || parsedAge < 0 || parsedAge > 150) {
    return res.status(400).json({
      success: false,
      message: "Age must be an integer between 0 and 150.",
    });
  }

  patients[index] = {
    id,
    name: String(name).trim(),
    age: parsedAge,
    gender: String(gender).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    condition: condition ? String(condition).trim() : "",
  };

  return res.status(200).json({
    success: true,
    message: "Patient updated successfully.",
    data: patients[index],
  });
});

// DELETE: Remove a patient
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = patients.findIndex((item) => item.id === id);

  if (!Number.isInteger(id) || index === -1) {
    return res.status(404).json({
      success: false,
      message: "Patient not found.",
    });
  }

  const deletedPatient = patients.splice(index, 1)[0];

  return res.status(200).json({
    success: true,
    message: "Patient deleted successfully.",
    data: deletedPatient,
  });
});

module.exports = router;