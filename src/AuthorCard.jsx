import React from 'react'
import Col from '../node_modules/react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const AuthorCard = ({author}) => {
  return (
    <>
      <Col lg={3} md={4} sm={6} col={12} className='mb-4'>
      <Card className=' position-relative bg-dark text-light ' style={{ width: '100%',height:'400px' }}>
      <div style={{width:'100%', height:'200px'}} 
      className='d-flex justify-content-center  p-2'>
        <Image src={author.imgUrl} className='w-100 ' rounded />
      </div>
      <Card.Body>
        <Card.Title>{author.person}</Card.Title>
        <Card.Text>{author.description} </Card.Text>
        
        <Button  variant="primary" target='_blank' href={author.articleUrl}
            className='position-absolute bottom-0 m-2'
        >{author.placeOfBirth}</Button>
      </Card.Body>
    </Card>
      </Col>
    </>
  )
}

export default AuthorCard
