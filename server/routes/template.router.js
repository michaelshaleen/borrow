const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = 
  `SELECT * FROM "toys"`;
  
  pool.query(query)
  .then( result => {
    console.log(result.rows, "get result")
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all movies', err);
    res.sendStatus(500)
  })
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const newToy= req.body;
  console.log(newToy, "new toy")
   const queryText = `
    INSERT INTO toys (name, ages) 
    VALUES ($1, $2);`;
      
  const queryParams = [
    newToy.name,
    newToy.ages
  ]

  pool.query(queryText, queryParams)
      .then((result) => {
        console.log(result, "result pool")
          res.sendStatus(201);
      })
      .catch((err) => {
          console.log(`Error making query ${queryText}`, err);
          res.sendStatus(500);
      });
});

module.exports = router;
