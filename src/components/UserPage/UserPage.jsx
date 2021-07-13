import React from 'react';
import './User.css';
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
<<<<<<< HEAD
import SearchToys from '../SearchToys/SearchToys';
import ShareToys from '../ShareToys/ShareToys';
import Profile from '../pictures/sharkKid.jpg';
=======

>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754

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
    console.log(user)
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
<<<<<<< HEAD
    <Nav />
      
            <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  {/* <img src={Profile} alt="Avatar" style={{width: 100, height: 100}}  /> */}
                  <h2>Hey there {user.username}!</h2>
                </div>

            </div>              
            <div className="underline">
              *(These are the toys you've shared! )
            </div>
              <table>
=======
    
    <div className="userBody">
       <div className="container">
         <div className="image_back">
           {/* <image src="https://i.pinimg.com/564x/48/31/4e/48314eb9dbdd0426c9f67139dbd71b6e.jpg"> */}

           {/* </image> */}
         </div>
            <div>
                <Nav />
             </div>
        
            <h2>Welcome back, {user.username}! </h2>
            {/* <PersonIcon /> */}
            <div className="overlay"></div>
              <div className="text"> 
        </div>
   
          
            <h4>These are the toys you've shared!</h4>
            
            <table>
              <thead>
              <tr><u>

                <td>Description </td>
                <td>Age</td>
                <td>Availability</td>
              </u>
              </tr>
              </thead>
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
              <tbody>
                  { toys.map(toy => {
                    return <ToyList key={toy.id} toy={toy}/>              
                  })}
<<<<<<< HEAD
              </tbody>
            </table>
            <footer><LogOutButton /> </footer>
=======

              </tbody>
            </table>
            



            <footer><LogOutButton /> </footer>


     </div>

      {/* <LogOutButton /> */}
  </div> 
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
    </>
  );
}

export default UserPage;

