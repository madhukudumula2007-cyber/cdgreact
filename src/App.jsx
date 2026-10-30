import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import '../src/components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  //let c=0;
  let [c,setC]=useState(0)
  let [othercount,setOthercount]=useState(0)
  useEffect(()=>{
    console.log('api call')
  },[othercount])

  return (
    <div>
      {othercount}
      <button onClick={()=>setOthercount(othercount+1)}>other</button>
      {c}
      <button onClick={()=>{
        setC(c+1)
        console.log(c)
      }}>increment</button>
      <Navbar/>
      <Section/>
      

      <div className='doctorcontainer'>
        <Doctorcard name='John' gender='Male' specialization='Bone Specialist'/>
        <Doctorcard name='Jessy' gender='Female' specialization='Cardiology'/>
        <Doctorcard name='Jack' gender='Male' specialization='Orthopedic'/>
        <Doctorcard name='Jane' gender='Female' specialization='Gynocologisy'/>
        <Doctorcard name='Jorden' gender='Male' specialization='Surgon'/>
      </div>
      <Addnewdoctor/>

    </div>
  )
}

export default App