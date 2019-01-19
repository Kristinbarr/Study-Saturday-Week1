const express = require('express');
const router = express.Router();

let student = [ {id:1, name: 'Dan'}, {id:2, name: 'Karen' } ]

router.get('/', async(req, res, next) => {
  try {
    res.send(students)
  } catch (err) {
    console.log(err)
    next(err)
  }
})


router.get('./:id', (req, res, next) => {
  try() {
    
  }
})



module.exports = router;
