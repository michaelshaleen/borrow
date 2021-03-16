const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = 
  `SELECT * FROM "toys"`;
  
  pool.query(query)
  .then( result => {
    console.log(result.rows, "get result")
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: in router.get toys', err);
    res.sendStatus(500)
  })
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
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


router.delete('/:toyId', rejectUnauthenticated, (req, res) => {
  const queryText = `
  DELETE FROM "toys"
  WHERE id = $1
  RETURNING *`; 


  queryParams = [req.params.petId];

  pool.query(queryText, queryParams)
  .then(dbRes =>{
    console.log("deleted rows", dbRes.rows)
    if(dbRes.rows.length === 0){
      res.sendStatus(403);
    }
    else{
      res.sendStatus(204);
    }
    res.sendStatus(204);
  })
  .catch(error => {
    console.log(error, "error pool query delete")
    res.sendStatus(500)
  })
})

module.exports = router;
