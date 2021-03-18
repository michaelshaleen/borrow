const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const querystring = require('querystring');




router.get('/:name', rejectUnauthenticated, async (req, res) => {
console.log(req.body, "req.body")
console.log(req.query.ages, "req.query")


let name = req.params.name;
console.log(name,'name')


//express to access req.body
  const query = 
  `SELECT * FROM "toys"`;
  
  pool.query(query)
  .then( result => {
    console.log(result.rows, "search result")
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: in router.get toys', err);
    res.sendStatus(500)
  })
  // GET route code here
});


module.exports = router;