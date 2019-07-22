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
const resetPlan = (id, user, over) => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + store.plan.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: id,
          value: user
        },
        over: over
      }
    }
  })
}
const myplans = id => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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
  myPlans,
  allPlans,
  updatePlan

}
