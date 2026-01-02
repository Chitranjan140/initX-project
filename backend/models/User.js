const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['designer', 'client'], default: 'designer' },
  profile: {
    bio: String,
    skills: [String],
    experience: String,
    portfolio: String,
    avatar: String
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);