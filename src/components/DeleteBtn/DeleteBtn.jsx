import axios from "axios";


function DeleteBtn({ toy }) {



  const deleteBtn = (toy) => {
    console.log('delete content')
    axios.delete(`/api/toy/${toyId}`)
    .then((res) => {
      console.log("successful delete",res);
      fetchToys();
      
    })
    .catch(err => {
      console.log(err, "delete toy error")
    })
  }

  return(
    <button onClick={()=>{ deleteBtn( toy ) }}>Delete</button>

  )
}

export default DeleteBtn;