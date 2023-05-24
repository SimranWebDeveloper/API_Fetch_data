import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../node_modules/react-bootstrap/Container'
import Row from '../node_modules/react-bootstrap/Row'
import AuthorCard from './AuthorCard'


const Authors = () => {
    const[data,setdata]=useState([])
    

    useEffect(()=>{
      // my created data
        axios.get('http://127.0.0.1:5500/src/data/myData.json')
        // browser daata
        // axios.get('https://example-data.draftbit.com/authors?_limit=10')
        .then(res=>{
            console.log(res.data)
            setdata(res.data)
        })
    },[])
  return (
    <>
      <Container>
        <Row g-3>
            {
                data.map((item,index)=>{
                   return <AuthorCard author={item} key={index} />
                })
            }

        </Row>
      </Container>
    </>
  )
}

export default Authors
