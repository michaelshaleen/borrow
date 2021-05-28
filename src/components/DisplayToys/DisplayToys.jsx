import CallIcon from '@material-ui/icons/Call';
import './Display.css';


function DisplayToys( { toy } ){

  return(
    <>

      <tr>
         <td>{toy.name} </td>
         <td>{toy.ages}</td>
         <td>{toy.available ? <span> available </span>:<span> unavailable </span> }</td>
         <td>Call Bradley at <CallIcon /> { toy.phone}</td>
         
       </tr>


    </>
  )
}

export default DisplayToys;