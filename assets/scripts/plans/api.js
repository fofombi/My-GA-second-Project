'use strict'
const config = require('../config')
const store = require('../store')

const createPlan = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllPlans = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getPlan = (id) => {
  return $.ajax({
    url: config.apiUrl + '/plans/ ' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlan = function (id) {
  return $.ajax({
    url: config.apiUrl + '/plans/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlan = data => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + data.plan.id,
    data: data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createPlan,
  getAllPlans,
  deletePlan,
  updatePlan,
  getPlan
}
