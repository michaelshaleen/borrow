import CallIcon from '@material-ui/icons/Call';



function DisplayToys( { toy } ){

  return(
    <>

      <tr>
         <td>{toy.name} </td>
         <td>{toy.ages}</td>
         <td>{toy.available ? <span> available </span>:<span> unavailable </span> }</td>
         <td>Call Bradley at <CallIcon /> { toy.phone}</td>
         {/* <td>{toy.</td> */}
       </tr>


    </>
  )
}

export default DisplayToys;