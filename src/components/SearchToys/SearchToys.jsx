import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';
import DisplayToys from '../DisplayToys/DisplayToys';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';


function SearchToys() {
  const dispatch = useDispatch();
  const searchedToys = useSelector((store) => store.searchedToy)
  const user = useSelector((store) => store.user);
  console.log(searchedToys, "available here");

  //if searchedToys.available == true
  // searchedToys =="true"
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
    <>
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
              })}
              </tbody>
      </table>




      <section className="showcase">
        <header>
          <h2 className="logo">Travel</h2>
          <div className="toggle"></div>
        </header>
        <video src="Video/Video.mp4" muted loop autoplay>


        </video>
      </section>
</>
  )
}

export default SearchToys;
    // <Button class="btn btn-secondary dropdown-toggle" 
    //   type="button" id="dropdownMenuButton" 
    //   data-toggle="dropdown" aria-haspopup="true" 
    //   aria-expanded="false">
    //     Button 
    // </Button>
    // <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //     <a class="dropdown-item" href="#">Action</a>
    //     <a class="dropdown-item" href="#">Another action</a>
    //     <a class="dropdown-item" href="#">Something else here</a>
    // </div>