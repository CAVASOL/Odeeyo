const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Note = require('../models/noteModel')
const Ticket = require('../models/ticketModel')

// @desc get user tickets
// @route GET /api/tickets/:ticketId/notes
// @access private
const getNotes = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById({ req.params.ticketId})

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.findOne({ticket: req.params.ticketId})

  res.status(200).json(notes)
})

module.exports = {
  getNotes,
}
