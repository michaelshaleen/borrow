const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fileUpload = require('express-fileupload');

const app = express();


const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const toyRouter = require('./routes/template.router');
const searchRouter = require('./routes/search.router');
const upload = require('./routes/template.router');
app.use(fileUpload());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/toy', toyRouter);
app.use('/api/search', searchRouter);
app.use('/upload', upload)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5432;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
