import CallIcon from '@material-ui/icons/Call';



function DisplayToys( { toy } ){

  return(
    <>

      <tr>
         <td>{toy.name} </td>
         <td>{toy.ages}</td>
         <td>{toy.available ? <span> true </span>:<span> false </span> }</td>
         <td> <CallIcon /> { toy.phone}</td>
       </tr>


    </>
  )
}

export default DisplayToys;