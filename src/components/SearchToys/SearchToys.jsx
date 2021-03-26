import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';
import DisplayToys from '../DisplayToys/DisplayToys';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';



function SearchToys() {
  const dispatch = useDispatch();
  const searchedToys = useSelector((store) => store.searchedToy)
  console.log(searchedToys, "toys heeree")
  const user = useSelector((store) => store.user);

  if(searchedToys.length == 0){
     
    }
  else{
    console.log("more than zero")
  }

  
  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  const searchBtn = (action) => {
    if(!toyName || !ageGroup){
      swal({
        title: "please enter input values"
      });
    }else{

      dispatch({
        type:'SEARCH_TOY',
        payload: {
          name: toyName,//input value being sent on search click
          ages: ageGroup      
        }
      })
     }
  }
//

  const cancelBtn = () => {
    console.log("cancel")
    return(
      setToyName(''),
      setAgeGroup('')
    )
  }

  return(
    <div className="container">

    <div className="search_Container">
    {/* <ToiChare /> */}
    <Nav />
    <h2>Search Toys {user.username}</h2>
      <input
      value={toyName}
      type="text"
      placeholder="Name"
      onChange={(event) => setToyName(event.target.value)}
      />
    <select 
        className="ageDrop"
        value={ageGroup}
        name="Ages" 
        id="ages"
        onChange={(event) => setAgeGroup(event.target.value)}
        >
        <option>  </option>
        <option value="0-3">0-3 Years Old</option>
        <option value="3-5">3-5 Years Old</option>
        <option value="5-10">5-10 Years Old</option>
    </select>
 

     
    <button onClick={searchBtn}>Search Toy</button>
    <button onClick={cancelBtn}>Cancel</button>


 

    <table >
    <thead>
        <tr>
          <th>Description </th>
          <th>Age </th>
          <th>Available </th>
          <th>Owner's Phone</th>
        </tr>
        </thead>
        <tbody>
                {searchedToys.map(toy => {
                return <DisplayToys key={toy.id} toy={toy}/>  
              }
              )}
              </tbody>
      </table>
      {/* if searchedToys === null */}

</div>
              </div>
  )
}

export default SearchToys;
    