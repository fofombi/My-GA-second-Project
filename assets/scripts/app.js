'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const planEvents = require('./plans/events.js')
// onst store = require('./store')
$(() => {
  // your JS code goes here
  // your JS code goes here
  // for Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Codes for plan
  $('#create-plan').on('submit', planEvents.onCreatePlan)
  $('.content').on('click', '.remove-button', planEvents.onDeletePlan)
  $('.content').on('click', '.edit-button', planEvents.openEditModal)
  $('#edit-plan-form').on('submit', planEvents.onEditPlan)
  $('#show-plan-form').on('submit', planEvents.onShowPlan)
  $('#getPlansButton').on('click', planEvents.onGetAllPlans)
  $('#hide-all').on('click', planEvents.onHidePlan)
  $('#change-button').on('click', () => {
    $('#change-modal').addClass('modalShow')
  })
  $('#show-button').on('click', () => {
    $('#show-modal').addClass('modalShow')
  })

  $('#show-button').on('click', () => {
    $('#show-modal').addClass('modalShow')
  })
  $('#create-test').on('click', () => {
    $('#myModal').addClass('modalShow')
  })
  $('.close').on('click', () => {
    $('#myModal').removeClass('modalShow')
    $('#edit-plan').removeClass('modalShow')
    $('#show-modal').removeClass('modalShow')
    $('#show-modal-name').removeClass('modalShow')
    $('#change-modal').removeClass('modalShow')
    $('form').trigger('reset')
  })
})
