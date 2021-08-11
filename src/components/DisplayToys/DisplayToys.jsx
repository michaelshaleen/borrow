import CallIcon from '@material-ui/icons/Call';
import './Display.css';
import { useState } from 'react';
import MessageIcon from '@material-ui/icons/Message';
import Modal from 'react-modal';
import {useSelector, useDispatch} from 'react-redux';



function DisplayToys( { toy } ){
  const user = useSelector((store) => store.user);

  const[modalIsOpen, setModalIsOpen] = useState(false);
  console.log(toy.phone, "toy id");
  console.log(user.id, "user")
  return(
    <>
      <tr>
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
          <h3>{toy.name}</h3>
          <h3>Phone number: {toy.phone}</h3>
          <div>
            <button onClick={() => setModalIsOpen(false)}>X</button>
          </div>
      </Modal>
    </>
  )
}

export default DisplayToys;