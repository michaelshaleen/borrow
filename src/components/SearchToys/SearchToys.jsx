import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';
import DisplayToys from '../DisplayToys/DisplayToys';

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
    dispatch({
      type:'SEARCH_TOY',
      payload: {
        name: toyName,//input value being sent on search click
        ages: ageGroup      
      }
    })
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
</>
  )
}

export default SearchToys;