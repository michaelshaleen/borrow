import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function ShareToys() {
  const dispatch = useDispatch();

  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const newToy = useSelector((store) => store.toy)
  console.log(newToy, "new Toy")




  const shareToy = () => {
    //console.log("share toy")
    dispatch({
      type: 'ADD_TOY',
      payload: {
        name: toyName,
        ages: ageGroup
      }
    })
  }
  return(
    <>
    <p>Share New Toys</p>
    <input
    type="text"
    placeholder="description"
    onChange={(event) => setToyName(event.target.value)}
    />
    <select name="Ages" id="ages"
      onChange={(event) => setAgeGroup(event.target.value)}>
        
      <option value="1">0-3 Years Old</option>
      <option value="2">3-5 Years Old</option>
      <option value="3">5-10 Years Old</option>
    </select>
    <button onClick={shareToy}>Share Toy</button>
    <button>Cancel</button>

    </>
  )

}

export default ShareToys;