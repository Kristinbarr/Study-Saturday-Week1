const express = require('express');
const router = express.Router();

let students = [ {id:1, name: 'Dan'}, {id:2, name: 'Karen' } ]

router.get('/', (req, res, next) => {
  res.send(students)
})


router.get('/:id', (req, res, next) => {
  let currentStudent = students.filter(student => {
    student.id === Number(req.params.id)
  })
  res.send(currentStudent)
})

// Add student
router.post('/', (req, res, next) => {
  const newStudent = req.body
  students.push(newStudent)
  res.send(newStudent)
})

// Update student, specified by /:id
router.put('/:id',(req, res, next) => {
  // find requested student to change 
  const currentStudent = students.filter(student => { 
    return student.id === Number(req.params.id)
  })[0]

  // create updated student copy and replace only the specific key/vals
  const change = req.body
  const updatedStudent = {...currentStudent, ...change}
  res.send(updatedStudent)
  console.log(updatedStudent, req.body)
})

module.exports = router;
