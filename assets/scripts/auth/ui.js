'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // Clear out our forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // Clear out our forms
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
  // keep track the user, so we can have the token for the api//
  // We use 'store' so we can access the token in any file
}

const signUpFailure = () => {
  failureMessage('You failed to sign up')
}

const signInSuccessful = (responseData) => {
  successMessage('You signed in successfully')
  store.user = responseData.user

  $('#sign-out').removeClass('hidden')
  $('#create-plan').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#update').show()
  $('#nav-bar').show()

  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const changePasswordSuccess = responseData => {
  successMessage('You changed your password successfully!')
  // keep track the user, so we can have the token for the api//
  // We use
}

const changePasswordFailure = () => {
  failureMessage('You failed to change your pasword')
}
// Sign Out
const signOutFailure = () => {
  failureMessage('You failed to sign out')
}

const signOutSuccessful = responseData => {
  successMessage('You have successfully signed out!')
  $('#board').addClass('hidden')
  $('#game-record').hide()
  $('#sign-out').addClass('hidden')
  $('#create-game').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.content').html('')

  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccessful
}
