import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';


function SearchToys() {
  const dispatch = useDispatch();
  const searchedToys = useSelector((store) => store.toy)


  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [available, setAvailable] = useState('');

  const searchBtn = () => {
    //console.log("vain search")
    dispatch({
      type:'SEARCH_TOY'
    })
  }


  const cancelBtn = () => {
    console.log("cancel")
    return(
      setToyName(''),
      setAgeGroup('')
    )
  }

  return(
    <>
    <p>Search Toys</p>
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

    <table>
          <tr>
          <th>Description</th>
          <th> Available </th>
          <th> Age</th>
        </tr>
            {searchedToys.map(toy => {
              return(
                <tbody>
              <tr>
                <td key={toy.id}>
                 <td>{toy.name}</td>
                 <td>{toy.ages}</td>
                </td>
              </tr>
          </tbody>
                )
            })}

      </table>
</>
  )
}

export default SearchToys;