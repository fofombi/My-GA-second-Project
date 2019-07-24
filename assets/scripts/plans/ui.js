'use strict'
const store = require('../store')
// const api = require('./api.js')
const showPlansTemplate = require('../templates/helpers/plans-listing.handlebars')
const onePlanTemplate = require('../templates/helpers/one-plan-listing.handlebars')
const createPlanSuccess = responseData => {
  $('#message').text('Create plan successfull')
  $('#create-plan').removeClass('hide')
  $('#myModal').removeClass('modalShow')
  $('form').trigger('reset')
}

const createPlanFailure = responseData => {
  $('#message').text('Failed to create plan')
  $('#create-plan').removeClass('hide')
  $('#myModal').removeClass('modalShow')
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
  console.log('hello')
  const showPlansHtml = showPlansTemplate({
    plans: responseData.plans
  })
  store.data = responseData
  store.all = responseData
  $('#message').text('Get all plans successfully')
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
  const onePlanHtml = onePlanTemplate({
    plan: data.plan
  })
  $('#message').text('Get plan successfully')
  $('.content').html(onePlanHtml)
}
const showPlanName = data => {
  if (data.length !== 0) {
    const showPlansHtml = showPlansTemplate({
      events: data
    })
    $('.content').html(showPlansHtml)
    $('#message').text('Get plan successfully')
  } else {
    $('#message').text('Name is not exist.')
    $('.content').empty()
  }
  $('#show-modal-name').removeClass('modalShow')
}
const getPlanFailure = data => {
  $('#message').text('Failed to get Plan')
}

const hidePlans = () => {
  if ($('.content').html() === '') {
    $('#message').text('There are nothing to hide')
  } else {
    $('.content').empty()
    $('#message').text('Hide Plans Successfully')
  }
}
module.exports = {
  createPlanSuccess,
  getAllPlanSuccess,
  passEditElement,
  createPlanFailure,
  editPlanFailure,
  editPlanSuccess,
  getPlanSuccess,
  getPlanFailure,
  hidePlans,
  showPlanName
}
