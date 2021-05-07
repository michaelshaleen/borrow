import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from 'react';
import axios from "axios";
import ToyList from '../ToyList/ToyList';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';
import '../Nav/Nav.css';
import SearchToys from '../SearchToys/SearchToys';
import ShareToys from '../ShareToys/ShareToys';

function UserPage() {
  const user = useSelector((store) => store.user);
  const toys = useSelector((store) => store.toy);

  console.log(toys.image, "toys in user page")
  const dispatch = useDispatch();

  //const [available, setAvailable] = useState('');

  useEffect(()=>{
    dispatch({
      type: 'FETCH_TOY'
      //payload: user.id
    })
  }, []);

  const fetchToys = () => {
    console.log("fetch toys")
    dispatch({
      type: 'FETCH_TOY'
      //payload: user.id
    })
  }

  


  return (
    <>
    
    <div className="userBody">
       <div className="container">
         <div className="image_back">
           {/* <image src="https://i.pinimg.com/564x/48/31/4e/48314eb9dbdd0426c9f67139dbd71b6e.jpg"> */}

           {/* </image> */}
         </div>
            <div>
                <Nav />
             </div>
        
            <u><h2
              className="welcome">Welcome back, {user.username}! </h2>
            </u>
            {/* <PersonIcon /> */}
            <div className="overlay"></div>
              <div className="text"> 
        </div>
   
          
            <div
              className="underline">*(These are the toys you've shared! )</div>
            
            <table>
              <thead>
              <tr><u>

                <td>Description </td>
                <td>Age</td>
                <td>Availability</td>
              </u>
              </tr>
              </thead>
              <tbody>
                  { toys.map(toy => {
                    return <ToyList key={toy.id} toy={toy}/>              
                  })}

              </tbody>
            </table>
            



            <footer><LogOutButton /> </footer>


     </div>

      {/* <LogOutButton /> */}
  </div> 
  <ShareToys />
  <SearchToys />


    </>
  );
}

export default UserPage;

