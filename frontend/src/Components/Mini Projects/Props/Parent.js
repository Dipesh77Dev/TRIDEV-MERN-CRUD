import React from 'react'
import { Child, Child1, Child2, Child3 } from './Child'
// import Map from './Child'

const data = [
  {
    no: '0',
    name: 'Sairin',
    color: 'Red'
  },
  {
    no: '1',
    name: 'Dipesh',
    color: 'Blue'
  },
  {
    no: '2',
    name: 'Ashish',
    color: 'Green'
  }
]

const Parent = () => {
  return (
    <>
      {console.log(data)}
      <h1>Datas of Parent:</h1>
      <p>{data[0].name}</p> {/* Sairin */}
      <p>{data[1].no}</p> {/* 1 */}
      <p>{data[2].color}</p> {/* Green */}
      <hr />
      {/* Destructure */}
      <Child propsdata={data} />
      <br />
      {/* Props */}
      <Child1 propsdata1={data} />
      <hr />
      {/* Map Method */}
      {/* <Map propsdata2={data} /> */}
      <Child2 propsdata2={data} />
      <br />
      <Child3 propsdata3={data} />
    </>
  )
}

export default Parent
