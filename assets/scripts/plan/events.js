'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetPlans = (event) => {
  event.preventDefault()
  api.getPlans()
    .then(ui.getPlansSuccess)
    .catch(ui.failure)
}

const onClearPlans = (event) => {
  event.preventDefault()
  ui.clearPlanss()
}
const onDeletePlans = (event) => {
  //   event.preventDefault()
//   const target = $(event.target)
  //  console.log(target)
  //  const id = target.data('id')
  //  console.log(id)
  //  api.deleteBooks(id)
  //  .catch(console)
  // ........ANONYMOUS FUNCTION........
  const id = $(event.target).data('id')
  api.deletePlan(id)
    .then(() => {
      onGetPlans(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPlansButton').on('click', onGetPlans)
  $('#clearPlansButton').on('click', onClearPlans)
  $('.content').on('click', 'button', onDeletePlans)
}

module.exports = {
  addHandlers
}

// 'use strict'
// // require getFormFields, our api functions, and our ui functions
// // const getFormFields = require('../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
// const store = require('../store.js')
// store.currentUser = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
// store['currentUser'] = [text]
// store.click = false
// $('#update').hide()
// // an event handler, note the parameter Owill be your event
// const onCreatePlan = event => {
//   // since we are submitting a form, we prevent the default action of
//   // refreshing the page. This wouldn't be needed for a button click, but it is
//   // needed since we are submitting a form.
//   event.preventDefault()
//   // event.target is whatever we are listening to, in this case:
//   // the #create-example form
//   // call our createExample AJAX request, passing it the data from our form
//
//   $('.cell').text('')
//   store['currentUser'] = ''
//   store.click = false
//   store.currentUser = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
//   store.full = false
//   api.createPlan()
//     .then(ui.createGameSuccessful)
//     .catch(console.log)
// }
//
//
//     $(event.target).css('text-align', 'center')
//     store.currentUser[event.target.id] = store.current
//     console.log(`${event.target.id} and play ${store.currentUser}`)
//
//     $(event.target).css('text-align', 'center')
//     const message = store.previousUser + ' is next turn'
//
//     $('#message').text(message)
//     console.log(store.currentUser + ' ' + store.previousUser)
//     $cells.css('background', 'checkEmptyransparent').text(store.currentUser)
//     store.full = checkEmpty()
//
//
//
// // We have a table of 36 empty cells (boxs)-
//
// // const retriever =function() {
// // the board container has 36 cells (squares)
// const cells = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
//                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
//
// const debute = function () {
//   $('.cells').each(function () {
//     $(this).click(function (createPlan) {
//
//   })
// }
// // check on display past Plan
//
// const onDisplayPastPlan = event => {
//   event.preventDefault()
//   $('#myModal').addClass('block')
//   api.getAllPlan()
//     .then(ui.displayAllPlan)
// }
//
// const onFerme = event => {
//   event.preventDefault()
//   $('#myModal').removeClass('block')
// }
// // ---------To display past game ------
// const onInformation = event => {
//   const target = $(event.target)
//   const id = target.data('id')
//   store.idResume = id
//   console.log(store.idResume)
//   api.getAllPlan()
//     .then(ui.displayAllPlan)
// }
// // If Player 1 is winner
// const alert = function () {
//   if (store.winner === 'x') {
//     // Display "screen-win-one" finish screen
//     $('#finish').addClass('screen-win-one')
//     $('#message').text('x win')
//     $('#finish').show()
//     store.click = true
//
//     // If Player 2 is winner
//   } else if (store.winner === 'o') {
//     // Display "screen-win-two" finish screen
//     $('#finish').addClass('screen-win-two')
//     $('#message').html('O  WINS')
//     $('#finish').show()
//     store.click = true
//     // If game has not been won but ther are no "null" values left in playedSquares array, it must be a draw
//   } else if (store.full) {
//     // Therefore, display tie game screen
//     $('#finish').addClass('screen-win-tie')
//     $('#message').html('DRAW')
//     $('#finish').show()
//
//     store.click = true
//   }
// }
// const onUpdatePlan = event => {
//   event.preventDefault()
//   //  const boardnow = store.game
//   const index = event.target.id
//   const value = $(event.target).text()
//   api.updatePlan(index, value)
//     .then(console.log)
//     .catch()
// }
// // check empty cell if it's empty accept click
// const checkEmpty = function () {
//   return store.plan.every(p => {
//     return (typeof p !== 'number')
//   })
// }
//
// module.exports = {
//   onCreatePlan,
//   debute,
//   cells,
//   onUpdatePlan,
//   onFerme,
//   onInformation,
//   onDisplayPastPlan,
//   alert,
//   win,
//   // cellClicked
// }
