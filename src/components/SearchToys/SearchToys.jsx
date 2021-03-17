import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';


function SearchToys() {
  const dispatch = useDispatch();
  const searchedToys = useSelector((store) => store.toy)


  const searchBtn = (event) => {
    //console.log(event.target.value, "value in search")
    dispatch({
      type:'FETCH__TOY',
      // payload: 
      // toyId = {toyId}
    })
  }

console.log(searchedToys, "searched toys")

  return(
    <>
    <p>Search Toys</p>
    <input
    type="text"
    placeholder="description"
    // onChange={(event) => setToyName(event.target.value)}
    />
    <select 
    //value={ageGroup.value}
    name="Ages" 
    id="ages"
    // onChange={(event) => setAgeGroup(event.target.value)}
    >

      <option>  </option>
      <option value="0-3">0-3 Years Old</option>
      <option value="3-5">3-5 Years Old</option>
      <option value="5-10">5-10 Years Old</option>

    </select>
    <button onClick={() => {searchBtn}}>Search Toy</button>
    <button>Cancel</button>

    <table>
          <tr>
          <th>Description</th>
          <th> Available </th>
          <th> Age</th>
        </tr>
        <tbody>
            {searchedToys.map(toy => {
              return(

                <tr>
                <td key={toy.id}>
                 <td>{toy.name} </td>
                 <td> {toy.ages}</td>
                </td>
              </tr>
                )
            })}

          </tbody>
      </table>

        {/*return <ToyList key={toy.id} toy={toy}/> */}

</>
  )
}

export default SearchToys;