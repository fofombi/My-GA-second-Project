'use strict'
const store = require('../store')
// const api = require('./api.js')
const showPlansTemplate = require('../templates/helpers/plans-listing.handlebars')
const onePlanTemplate = require('../templates/helpers/one-plan-listing.handlebars')

const createPlanSuccess = responseData => {
  $('#message').text('Create plan successfull')
  $('#create-plan').removeClass('hide')
  $('#myModal').attr('class', 'modal')
  $('form').trigger('reset')
}

const createPlanFailure = responseData => {
  $('#message').text('Failed to create plan')
  $('#create-plan').removeClass('hide')
  $('#myModal').removeClass('modalShow')
  $('form').trigger('reset')
}
const showContent = responseData => {
  const showPlansHtml = showPlansTemplate({ plans: responseData.plans })
  store.data = responseData
  store.all = responseData
  $('.content').html(showPlansHtml)
  $('form').trigger('reset')
}
const editPlanSuccess = data => {
  $('#message').text('Edit plan successful')
  $('#edit-plan').removeClass('modalShow')
  $('form').trigger('reset')
}
const editPlanFailure = data => {
  $('#message').text('Failed to edit plan')
  $('form').trigger('reset')
}
const getAllPlanSuccess = responseData => {
  const showPlansHtml = showPlansTemplate({
    plans: responseData.plans
  })
  store.data = responseData
  store.all = responseData
  $('.content').html(showPlansHtml)
}

const passEditElement = data => {
  $('#inputEditTitle').val(data.title)
  $('#inputEditDescription').val(data.description)
  $('#inputEditStartingDate').val(data.starting_date)
  $('#inputEditEndingDate').val(data.ending_date)
  $('#inputEditComments').val(data.comments)
  $('#inputEditRating').val(data.rating)
}

const getPlanSuccess = data => {
  const onePlanHtml = onePlanTemplate({plan: data.plan})
  $('#message').text('Your Get plan is successful')
  $('.content').html(onePlanHtml)
}

module.exports = {
  createPlanSuccess,
  getAllPlanSuccess,
  passEditElement,
  createPlanFailure,
  editPlanFailure,
  editPlanSuccess,
  getPlanSuccess,
  showContent
}
