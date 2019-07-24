'user strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
store.plan = {}
const onCreatePlan = event => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.createPlan(data)
    .then(ui.createplanSuccess)
    .catch(ui.createplanFailure)
    .then(() => {
      onGetAllPlans(event)
    })
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
      onGetAllPlans(event)
    })
    .catch(console.log)
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
    .then(() => {
      onGetAllPlans(event)
    })
}
const onHidePlans = (event) => {
  event.preventDefault()
  ui.hidePlans()
}
const onGetPlan = (event) => {
  // console.log('in onGetPlans')
  api.getPlan()
    .then(ui.getPlansSuccess)
    .catch(ui.failure)
}
// const onClearPlans = (event) => {
//  event.preventDefault()
//  ui.clearPlans()
// }

const addHandlers = () => {
  $('#getPlansButton').on('click', onGetPlan)
//  $('#clearPlansButton').on('click', onClearPla &
//  ('body').on('click', 'delete-plan', onDeletePlan)
}

module.exports = {
  onCreatePlan,
  onGetAllPlans,
  onDeletePlan,
  onEditPlan,
  openEditModal,
  onHidePlans,
  addHandlers
}
