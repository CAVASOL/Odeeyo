const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: [
        'Eyebrow Stamp & Stencil Kit',
        'Press and Go Lashes',
        'Polygel Nail Kit',
        '4 Pairs Magnetic Lashes',
        'Magic Copybook Kit',
      ],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
