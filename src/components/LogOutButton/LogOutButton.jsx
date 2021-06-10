import React from 'react';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <>

    {/* <div className="toggle">
      <div class="menu">
        <ul>     
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
  </div> */}
    <button    
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}>    
        <div 
          fullWidth 
          label="LogOut" icon={<ExitToAppIcon/> }/>
    </button>
    </>
  );
}

export default LogOutButton;
