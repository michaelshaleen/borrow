import CallIcon from '@material-ui/icons/Call';
import './Display.css';
import { useState } from 'react';
import MessageIcon from '@material-ui/icons/Message';
import Modal from 'react-modal';


function DisplayToys( { toy } ){
  const[modalIsOpen, setModalIsOpen] = useState(false);

  return(
    <>
      <tr>
<<<<<<< HEAD
        <td>{toy.name} </td>
        <td>{toy.ages}</td>
        <td>{toy.available ? <span> available </span>:<span> unavailable </span> }</td>
        <td>
          <CallIcon 
              onClick={() => setModalIsOpen(true)}/> 
          <MessageIcon 
            onClick={() => setModalIsOpen(true)}/>
        </td>
      </tr>
       <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}>
          <h2>{toy.user}</h2>
          <p>Phone number: {toy.phone}</p>
          <p>Phone number: {toy.user_id}</p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </div>
      </Modal>
=======
         <td>{toy.name} </td>
         <td>{toy.ages}</td>
         <td>{toy.available ? <span> available </span>:<span> unavailable </span> }</td>
         <td>Call Bradley at <CallIcon /> { toy.phone}</td>
         {/* <td>{toy.</td> */}
       </tr>


>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
    </>
  )
}

export default DisplayToys;