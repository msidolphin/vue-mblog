'use strict'
import Vue from 'vue'
import axios from "axios"

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export function fetch(url, type, params) {
  return new Promise((resolve, reject) => {
    switch (type) {
      case "get":
            axios.get(url, {
              params: params
            }).then(response => {
              resolve(response)
            }).catch(error => {
              reject(error)
            })
            break
      case "post":
            axios.post(url, params)
              .then(response => {
                resolve(response)
              }).catch(error => {
              reject(error)
            })
            break
    }
  })
}
