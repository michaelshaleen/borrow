import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Fade,
  Tooltip,
  Grid,
  InputLabel,
} from '@material-ui/core';


function Edit() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <div>Edit
      <form className="formPanel" >
      <h2 style={{color:'white', fontFamily:'cursive'}}>Register User</h2>
     
    
      <div>
        <label htmlFor="username"
        style={{color:'white', fontFamily: 'cursive'}}>
          Username:
          <TextField
            label="GreatParent1000"
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password"
        style={{color:'white', fontFamily: 'cursive'}}>
          Password:
          <TextField
            label="Something Unique!"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone"
        style={{color:'white', fontFamily: 'cursive'}}>
          Phone Number:
          <TextField
            label="867-5309"
            type="tel"
            name="phone"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
      
    </div>
  )
}

export default Edit;
