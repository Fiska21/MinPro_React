import react, { useEffect, useState } from "react";
// import {useState} from "react/cjs/react.development"
import { Button, ModalHeader, ModalBody, Modal, Table } from 'reactstrap'
import CreateForm from "./create";
import UpdateForm from "./update";

const dummy = [
  {
    "id": "323234342",
    "name": "Baju",
    "price": 200000,
    "quantity": 200
  },
  {
    "id": "12121212",
    "name": "Celana",
    "price": 100000,
    "quantity": 400
  }
]


const header = ["No", "Id", "Name", "Price", "Quantity"]

const Dashboard = () => {

  const [data, setData] = useState([])
  const [createModalVisible, setCreateModalVisible] = useState(false)
  const [updateModalVisible, setUpdateModalVisible] = useState(false)
  const [editedDataID, setEditedDataID] = useState({})

  const handleDelete = (id) => {
    const updatedData = data.filter((v) => v.id !== id) 
    setData(updatedData)
  }

  const handleEdit = (id) => {
    setEditedDataID(id)
    setUpdateModalVisible(true)
  }

  useEffect(() => {
    setData(dummy)
  }, [])

  return (
    <div style={{ margin: "70px" }}>

      <h1> List Product</h1>

      <br />
      <Button

        color="primary"
        onClick={() => setCreateModalVisible(true)}
      >
        Create Data + </Button>
      <br /> <br />

      <Table>
        <thead>
          <tr>
            {header.map((value, idx) => (
              <th key={idx}> {value} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummy.map((value, idx) => (
            <tr>
              <th scope="row">
                {idx + 1}
              </th>
              <td> {value.id}</td>
              <td> {value.name} </td>
              <td> {value.price} </td>
              <td> {value.quantity} </td>
              <td>
                <Button onClick={() => handleEdit(value.id)}> Edit </Button>
              </td>

              <td>
                <Button onClick={() => handleDelete(value.id)} color="danger"> Delete </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* MODAL CREATE FORM*/}
      <Modal isOpen={createModalVisible} toggle={() => setCreateModalVisible(!createModalVisible)}>
        <ModalHeader> Create Data </ModalHeader>
        <ModalBody>
          <CreateForm
            data={data}
            setOpen={setCreateModalVisible}
          />
        </ModalBody>
      </Modal>

      {/* MODAL UPDATE FORM*/}
      <Modal isOpen= {updateModalVisible} toogle ={() => setUpdateModalVisible(!updateModalVisible)}>
        <ModalHeader> Update Data</ModalHeader>
        <ModalBody>
          <UpdateForm
          data ={data} 
          setOpen = {setUpdateModalVisible}
          editedDataID = {editedDataID}
          setData = {setData}
          />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Dashboard