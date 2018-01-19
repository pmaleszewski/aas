'use strict'

const router = require('express').Router()
const messageController = require('../controllers/messages.controller')
const validateBody = require('../filters/validate.body')
const Message = require('../models/message')

module.exports = router

//api routes
router.get('/', messageController.readAll)
router.post('/', validateBody(Message), messageController.create)
router.put('/:id([0-9a-fA-F]{24})', validateBody(Message), messageController.update)
router.delete('/:id([0-9a-fA-F]{24})', messageController.delete)