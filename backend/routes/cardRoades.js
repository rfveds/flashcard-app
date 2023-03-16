const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get cards' })
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set card' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update card ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete card ${req.params.id}` })
})


module.exports = router

