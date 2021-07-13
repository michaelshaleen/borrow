import React from 'react';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <>
<<<<<<< HEAD
    <button    
=======

    <div className="toggle">
      <div class="menu">
        <ul>     
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
  </div>
    <button    
    
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
<<<<<<< HEAD
      onClick={() => dispatch({ type: 'LOGOUT' })}>    
        <div 
          fullWidth 
          label="LogOut" icon={<ExitToAppIcon/> }/>
=======
      onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        
  <Tab fullWidth 
  label="LogOut" icon={<ExitToAppIcon/> } />
    
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
    </button>
    </>
  );
}

export default LogOutButton;
