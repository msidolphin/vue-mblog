'use strict'
import Axios from "axios"

export function fetch(url, type, params) {
  return new Promise((resolve, reject) => {
    switch (type) {
      case "get":
            Axios.get(url, params)
              .then(response => {
              resolve(response)
            }).catch(error => {
              reject(error)
            })
            break
      case "post":
            Axios.post(url, params)
              .then(response => {
                resolve(response)
              }).catch(error => {
              reject(error)
            })
            break
    }
  })
}

