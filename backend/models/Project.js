const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['web', 'mobile', 'branding', 'ui-kit'], required: true },
  status: { type: String, enum: ['draft', 'in-progress', 'review', 'completed'], default: 'draft' },
  designer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assets: [{
    name: String,
    url: String,
    type: { type: String, enum: ['image', 'video', 'document'] },
    uploadedAt: { type: Date, default: Date.now }
  }],
  feedback: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    createdAt: { type: Date, default: Date.now }
  }],
  tags: [String],
  isPublic: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);