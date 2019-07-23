'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const planEvents = require('./plan/events.js')

$(() => {
  // your JS code goes here
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-plan').on('click', planEvents.onCreatePlan)
  $('#update').on('click', planEvents.onUpdatePlan)
  planEvents.addHandlers()
})
