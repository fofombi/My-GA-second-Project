'use strict'
const config = require('../config')
const store = require('../store')

const createPlan = () => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    data: {},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// create game for a user

// reset or update of my game.
const resetPlan = (id, currentUser, over) => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + store.plan.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      plan: {
        cell: {
          index: id,
          value: currentUser
        },
        over: over
      }
    }
  })
}

const getPlans = function () {
  return $.ajax({
    url: config.apiUrl + '/plans'
  })
}

const deletePlans = function (id) {
  return $.ajax({
    // url:`${config.apiUrsl}/plans/${id}`,
    url: config.apiUrl + '/plans/' + id,
    method: 'DELETE'
  })
}

const allPlans = () => {
  return $.ajax({
    url: config.apiUrl + '/plans/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updatePlan = (index, value) => {
  return $.ajax({
    url: config.apiUrl + '/plan/' + store.plan.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'plan': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': store.plan.over
      }
    }
  })
}
module.exports = {
  createPlan,
  resetPlan,
  getPlans,
  deletePlans,
  allPlans,
  updatePlan

}
