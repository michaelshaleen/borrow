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
import SearchToys from '../SearchToys/SearchToys';
import ShareToys from '../ShareToys/ShareToys';
import Profile from '../pictures/sharkKid.jpg';

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
    <Nav />
      
            <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <h3>Home Page</h3>
                  {/* <img src={Profile} alt="Avatar" style={{width: 100, height: 100}}  /> */}
                  <h5>{user.username}</h5>
                </div>

            </div>
            <div className="overlay"></div>
              
            <div className="underline">
              *(These are the toys you've shared! )
            </div>
              <table>
              <tbody>
                  { toys.map(toy => {
                    return <ToyList key={toy.id} toy={toy}/>              
                  })}
              </tbody>
            </table>
            <footer><LogOutButton /> </footer>
    </>
  );
}

export default UserPage;

