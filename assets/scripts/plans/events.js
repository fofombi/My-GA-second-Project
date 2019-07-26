'user strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
store.plan = {}

const onCreatePlan = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPlan(data)
    .then(ui.createPlanSuccess)
    .catch(ui.createplanFailure)
}

const onGetAllPlans = event => {
  event.preventDefault()

  api.getAllPlans()
    .then(ui.getAllPlanSuccess)
    .catch(ui.getAllPlanFailure)
}

const onDeletePlan = event => {
  event.preventDefault()
  const target = $(event.target)
  const id = target.data('id')

  api.deletePlan(id)
    .then(() => {
      $('#message').text('DELETE successfully. Get the plans again')
    })
    .catch(() => {
      $('#message').text('DELETE Failure.')
    })
}
const openEditModal = event => {
  $('#edit-plan').addClass('modalShow')
  event.preventDefault()
  const target = $(event.target)
  const id = target.data('id')
  store.plan.id = id
  const editElement = store.data.plans.find(plan => plan.id === id)
  ui.passEditElement(editElement)
}

const onEditPlan = event => {
  event.preventDefault()
  store.plan.title = $('#inputEditTitle').val()
  store.plan.description = $('#inputEditDescription').val()
  store.plan.starting_date = $('#inputEditStartingDate').val()
  store.plan.ending_date = $('#inputEditEndingDate').val()
  store.plan.comments = $('#inputEditComments').val()
  store.plan.rating = $('#inputEditRating').val()
  api.updatePlan(store)
    .then(ui.editPlanSuccess)
    .catch(ui.editPlanFailure)
  //   .then(() => {
  //     onGetAllPlans(event)
  //   })
    .then(() => {
      $('#message').text('EDIT successfully. Get the plans again')
    })
    .catch(() => {
      $('#message').text('EDIT Failure.')
    })
}
const onGetPlan = (event) => {
  // console.log('in onGetPlans')
  api.getPlan()
    .then(ui.getPlansSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPlansButton').on('click', onGetPlan)
}

module.exports = {
  onCreatePlan,
  onGetAllPlans,
  onDeletePlan,
  onEditPlan,
  openEditModal,
  addHandlers
}
