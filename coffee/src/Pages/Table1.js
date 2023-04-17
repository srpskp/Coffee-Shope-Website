import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Table1() {
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [id, setId] = useState('')
    // const [clr, setclr] = useState('')
    const [products, setproducts] = useState([
      {
        id: 1,
        name: 'Item1',
        price: 100
      },
      {
        id: 2,
        name: 'Item2',
        price: 200
      },
      {
        id: 3,
        name: 'Item3',
        price: 300
      }
    ])
    let deleteData = (id) => {
      // console.log(id)
      let newarray = products.filter(item => item.id != id)
      setproducts(newarray)
    }
    let hendalChangename = (e) => {
      // console.log(e.target.value)
      setname(e.target.value)
    }
    let hendalChangeprice = (e) => {
      // console.log(e.target.value)
      setprice(e.target.value)
    }
    let addData = (event) => {
  
      event.preventDefault()
      let temp = {
        // id:7,
        id: products.length + 1,
        name: name,
        price: price
      }
      // console.log(temp)
      // setproducts(products.push(temp))
      // products.push(temp)
      // console.log(products)
  
      setproducts([...products, temp])
      setname('')
      setprice('')
    }
    let updateData = (id) => {
      console.log(id)
      let temp = products.filter(item => item.id == id)
      console.log(temp)
      setname(temp[0].name)
      setprice(temp[0].price)
      setId(id)
    }
    let update = () => {
      console.log(id)
      let temp = {
        id: id,
        name: name,
        price: price
      }
      console.log(temp)
      // var updateData=[...temp]
      // console.log(setproducts)
  //   var data = products.map((item)=> item.id==temp.id)
  // console.log(data)
      // setproducts([...products,data])
      // setproducts(setproducts)
      setname('')
      setprice('')
  
    }
    console.log(products)
  return (
    <>
     <Form className="container">
     <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={hendalChangename} value={name} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" onChange={hendalChangeprice} value={price} />
      </Form.Group>
      
      <Button className='mx-4' variant="primary" type="submit" onClick={addData}>
        Add Data
      </Button>
      <Button className='mx-2' variant="primary" type="submit" onClick={update}>
        Update
      </Button>
    </Form>

    

         <Table className='mt-5 container' striped bordered hover variant="light">
      <thead>
        <tr>
        {/* <th>#</th> */}
            <th>Id</th>
            <th> Name</th>
            <th> Price</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
            products ? products.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Button  onClick={() => deleteData(item.id)} className='btn btn-info mx-4'>Delete </Button>
                  <Button onClick={() => updateData(item.id)} className='btn btn-info mx-2'>Update</Button>
                </td>
              </tr>
            )) : <h2>Loading</h2>
          }

      </tbody>
    </Table>
    </>
  )
}
