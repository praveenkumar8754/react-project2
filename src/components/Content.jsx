import React,{ useContext } from 'react'
import { UserDataContext } from './context/UserContext'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';


function Content() {
  const {data,setData} = useContext(UserDataContext)
  const navigate = useNavigate()

  let handleDelete = (index)=>{
    let newData = [...data]
    newData.splice(index,1)
    setData(newData)

}

  const UserSchema = Yup.object().shape({
    title:Yup.string().required("Title is Required"),
    body:Yup.string().required("Body is Required")
  })

  return <>
  <div className='p-4 container-fluid' style={{backgroundColor:'#E3E8F8'}}>
  <Container>
    <Row>
      <Col>
      <Card className='cards'>
        <Card.Title className='p-3 mt-2' style={{color:'#203562'}}> Add a Note </Card.Title>
        <Formik initialValues={{
          title:'',
          body:''
        }} 
        validationSchema={UserSchema}
        onSubmit={(values)=>{
          let newArray = [...data]
          newArray.push(values)
          setData(newArray)
        
        }}>

        {({ errors,touched,handleBlur,handleSubmit,handleChange})=>(  
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Card.Title className='ps-3' style={{color:'#203562'}}><FormControl type='text' placeholder='Title' name='title' onBlur={handleBlur} onChange={handleChange} />
        {errors.title && touched.title ? <div style={{color:"red"}}>{errors.title}</div>:null} 
        
        </Card.Title>
        </Form.Group>
        
        <Form.Group className="mb-3">
        <Card.Body className='p-3 mb-5' style={{color:'#4B649A'}}>
        <FormControl type="text" placeholder='| Take a note...' name='body' onBlur={handleBlur} onChange={handleChange}/>
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
      </Card>
      </Col>
    </Row>

    <Row>
    <Col>
    <div className='row-cards'>
    <div className='d-flex flex-column gap-2 mt-5'>
    <div>
    <img src='/Icons/description.svg' /> &nbsp;
    <span className='notes' style={{color:'#203562'}}> My Notes </span>
    </div>
    <div className='recent ms-1' style={{color:'#4B649A'}}>
    <span> Recently viewed</span>
    </div>
    </div>
    </div>
    </Col>
    </Row>

    <Row>
    <Col>
    <div className='d-flex gap-2 p-2 mt-2 cardConatiner'>
    {
    data.map((e,index)=> {
      return <div className='cardsGroup' key={index}>
      <Card className='contentCards'>
        <Card.Title className='ps-3 pt-2 d-flex imgTitle' style={{color:'#203562'}}>{e.title} 
        <div className='images'>
            <div className='edit-Card'>
            <img src='/Icons/edit.svg' onClick={()=>{
              navigate(`/cards/${index}`)
            }} /> &nbsp;
            </div>
            <div className='delete-Card'>
            <img src='/Icons/delete.svg' onClick={()=>handleDelete(index)} />
            </div>   
        </div>      
        </Card.Title>
        <Card.Body>
        <Card.Text>
        {e.body}
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
    })
  }
  </div>
  </Col>
  </Row>
  </Container>
  </div>
  </>
}

export default Content