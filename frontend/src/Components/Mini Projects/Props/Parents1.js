import React from 'react'
import { Child1, Child2, Child3, Child4 } from './Child1'

const Parents1 = () => {
  const data1 = [
    {
      no: '0',
      name: 'Sairin',
      location: 'Mira-Road',
      color: 'black'
    },
    {
      no: '1',
      name: 'Ashish',
      location: 'Kandivali',
      color: 'blue'
    },
    {
      no: '2',
      name: 'Dipesh',
      location: 'Nallasopara',
      color: 'blue'
    }
  ]
  return (
    <>
      {console.log(data1)}
      <h1> Displaying the data :- </h1>
      <p>{data1[0].name}</p> {/*  sairin */}
      <p>
        Hello I am {data1[1].name}; My favourite color is {data1[1].color}, And
        My location is {data1[1].location}
      </p>
      <hr />
      {/* props */}
      <Child1 data_of_props={data1} />
      <hr />
      {/* Destructure */}
      <Child2 destruct_props={data1} />
      <hr />
      {/* Map Method */}
      <Child3 map_props={data1} />
      <hr />
      {/* Map method using destructure */}
      <Child4 destruct_map_props={data1} />
    </>
  )
}

export default Parents1
