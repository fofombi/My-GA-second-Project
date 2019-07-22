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

const createPlanFailure = () => {
  failureMessage('Fail to create an Game')
}
const resetSuccess = responseData => {

}
const createPlanSuccessful = responseData => {
  // successMessage('You have create an example successfully')
  successMessage('Start  new Game')
  store.plan = responseData.plan
  $('#board').removeClass('hidden')
  console.log(store.plan.id)
}
// could you display the current game
const displayPlan = responseData => {
  store.disableClick = true
  store.currentUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
  responseData.plans.forEach(Data => {
    if (Data.id === store.idResume) {
      for (let i = 0; i < 36; i++) {
        $('#box' + i).text(Data.cells[i])
        store.currentUser[i] = Data.cells[i]
        if (Data.cells[i] === '') {
          store.currentUser[i] = i
        }
      }
    }
    $('#board').removeClass('hide')
    $('#myModal').removeClass('block')
    $('#message').text('show successfully')
    $('.box').removeClass('red-background')
  })
}
// could display all games playes
const displayAllPlan = responseData => {
  store.allPlans = responseData.plans
  responseData.plan.forEach(Data => {
    if (store.id.indexOf(Data.id) === -1) {
      store.id.push(Data.id)
      const htmlContent = `
      <p class="info" data-id="${Data.id}">ID: ${Data.id}
        | Cells: ${Data.cells}
        | Over :${Data.over}
        | currentUser : {
          id: ${Data.user_x.id}
          email: ${Data.user_x.email}
      </p>
        `
      $('.modal-content').append(htmlContent)
    }
  })
}
const updateSuccessful = data => {
  console.log(data)
}
module.exports = {
  createPlanFailure,
  createPlanSuccessful,
  displayPlan,
  displayAllPlan,
  updateSuccessful,
  resetSuccess
}
