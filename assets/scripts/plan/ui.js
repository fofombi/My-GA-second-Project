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
  failureMessage('Fail to create an Plan')
}
const resetSuccess = responseData => {

}
const createPlanSuccessful = responseData => {
  // successMessage('You have create an example successfully')
  successMessage('Start  new Plan')
  store.plan = responseData.plan
  $('#board').removeClass('hidden')
  console.log(store.plan.id)
}
// could you display the current game
const displayPlan = responseData => {
  store.disableClick = true
  store.currentUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
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
const showAllPlan = responseData => {
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
// const showPlansTemplate = require('../templates/plan-listing.handlebars')
//
// const getPlansSuccess = (data) => {
//   console.log(data)

//   // 2 Use the template file as a function
//   // 3 Pass the file an object as an argument
//   // 4 will return an interpolated HTM
//
//   // 5 Insert the Html string  onto the page using jQuery
//   // 6 use append OR HTML

const clearPlans = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  createPlanFailure,
  createPlanSuccessful,
  displayPlan,
  showAllPlan,
  updateSuccessful,
  resetSuccess,
  // getPlansSuccess,
  // showPlansTemplatesHtml,
  clearPlans,
  failure
}
