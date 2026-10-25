import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, default: 'Patient', maxlength: 80 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true, select: false },
  role: { type: String, enum: ['patient'], default: 'patient' }
}, { timestamps: true });
export default mongoose.model('User', userSchema);
