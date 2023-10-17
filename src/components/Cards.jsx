import React,{ useContext, useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { UserDataContext } from './context/UserContext';
import { useParams, useNavigate } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';

function Cards() {

const params = useParams()
const {data,setData} = useContext(UserDataContext)
const [initialValue,setInitialValue] = useState({
    title:"",
    body:""
  })
const navigate = useNavigate()

const UserSchema = Yup.object().shape({
  title:Yup.string(),
  body:Yup.string()
})

const getData =(index)=>{
  let newValues = {...initialValue}
  newValues.title = data[index].title
  newValues.body = data[index].body
  console.log(newValues)
  setInitialValue(newValues)
}

useEffect(()=>{
  const id = Number(params.id);
  if(id >= 0 && id <data.length)
  {
    getData(id)
  }
  else{
    navigate('content')
  }
},[params.id, data])

return <div className='row-cards'>
<Container>
<Row>
<Col>
    <div className='d-flex flex-column gap-2 mt-5'>
    <h1> Edit Cards </h1>
    </div>
</Col>
</Row>
    
<Row>
<Col>
  <div className='d-flex gap-2 p-2 mt-2 '>
  <Formik
    initialValues={initialValue}
    validationSchema={UserSchema}
    enableReinitialize={true}
    onSubmit={(values)=>{
    let newArray = [...data]
    newArray.splice(params.id,1,values)
    // newArray.splice(params.id,1,values)
    setData(newArray)
    navigate('/content')
  }}>
 
 {({ values,errors,touched,handleBlur,handleSubmit,handleChange})=>(  
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
  <Card.Title className='ps-3' style={{color:'#203562'}}><FormControl type='text' placeholder='Title' name='title' value={values.title} onBlur={handleBlur} onChange={handleChange} />
  {errors.title && touched.title ? <div style={{color:"red"}}>{errors.title}</div>:null} 
        
  </Card.Title>
  </Form.Group>
        
  <Form.Group className="mb-3">
  <Card.Body className='p-3 mb-5' style={{color:'#4B649A'}}>
  <FormControl type="text" placeholder='| Take a note...' name='body' value={values.body} onBlur={handleBlur} onChange={handleChange}/>
  {errors.body && touched.body ? <div style={{color:"red"}}>{errors.body}</div>:null} 
  <br />
  <Button variant="primary" type='submit'>
  Submit
  </Button>
  </Card.Body>
  </Form.Group>          
  </Form> 
  )}

</Formik>
</div>
</Col>
</Row>
</Container>

  </div>
}

export default Cards