import React from 'react';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Button
    color="secondary"
    
    
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        
  <Tab
  label="LogOut" icon={<ExitToAppIcon/> } />
    
    </Button>
  );
}

export default LogOutButton;
