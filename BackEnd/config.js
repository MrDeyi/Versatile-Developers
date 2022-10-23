const {initializeApp,cert} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')
const serviceAccount = require('./versatile-developers-firebase-adminsdk-877fd-ff9a1ab93f.json')

initializeApp({
    credential:cert(serviceAccount)
})

const db = getFirestore()

module.exports = {db}