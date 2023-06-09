import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { AppContext, useAppContext } from "../context/appContext";

const EditModal = ({show, onClose, rowData}) => {

const {updateStudent} = useAppContext(AppContext);
const [formData, setFormData] = useState({
  id:'',
  name:'',
  age:''
})
const handleOnChange = (key, value) =>{
  setFormData({
    ...formData,
    [key]:value
  })

}
const handleSubmit = (e)=>{
  e.preventDefault();
  updateStudent(formData);
  onClose();
}

useEffect(()=>{
  setFormData(rowData)
}, [rowData])
  return (
    <>
     

      <Modal show={show} onHide={onClose}>
        <Modal.Header className="bg-info text-white" closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className='mb-3'>
                <Form.Control type="text" defaultValue={rowData.name} onChange={e => handleOnChange('name',e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Control type="number" defaultValue={rowData.age} onChange={e => handleOnChange('age',e.target.value)}/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
