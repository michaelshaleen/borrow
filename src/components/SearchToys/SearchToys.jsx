import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';


function SearchToys() {
  const dispatch = useDispatch();
  const searchedToys = useSelector((store) => store.toy)


  const searchBtn = () => {
    //console.log("vain search")
    dispatch({
      type:'SEARCH_TOY'
    })
  }

//console.log(searchedToys, "searched toys")

  return(
    <>
    <p>Search Toys</p>
    <input
    type="text"
    placeholder="description"
    />
    <select 
    name="Ages" 
    id="ages"
    >

      <option>  </option>
      <option value="0-3">0-3 Years Old</option>
      <option value="3-5">3-5 Years Old</option>
      <option value="5-10">5-10 Years Old</option>

    </select>
    <button onClick={searchBtn}>Search Toy</button>
    <button>Cancel</button>

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

        {/*return <ToyList key={toy.id} toy={toy}/> */}

</>
  )
}

export default SearchToys;