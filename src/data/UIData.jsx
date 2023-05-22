import React from 'react'
import AutorsArray from './Data'
import AuthorCard from '../AuthorCard'
import Container from '../../node_modules/react-bootstrap/Container'
import Row from '../../node_modules/react-bootstrap/Row'

const UIData = () => {
  return (
    <>
          <Container>
        <Row g-3>
        {
        AutorsArray.map((item,index)=>
         <AuthorCard author={item} key={index} />)
      }

        </Row>
      </Container>

    </>
  )
}

export default UIData
