import React from 'react'

const Child = ({ propsdata }) => {
  return (
    <>
      <h1>This is coming from Parent Component using Destructure</h1>
      <p>This Dipesh is coming from parent - {propsdata[1].name}</p>
      <p>{propsdata[0].name}</p>
      <p>{propsdata[2].name}</p>
    </>
  )
}

const Child1 = props => {
  return (
    <>
      <h1>This is coming from Parent Component using props</h1>
      <p>This Dipesh is coming from parent - {props.propsdata1[1].name}</p>
      <p>{props.propsdata1[0].name}</p>
      <p>{props.propsdata1[2].name}</p>
    </>
  )
}

const Child2 = ({ propsdata2 }) => {
  return (
    <>
      <h1>This is coming from Parent Component using Destructure Map method</h1>
      {propsdata2.map(value => (
        <li key={value.no}>
          My name is - {value.name}; <br />
          My Favourite color is - {value.color}
        </li>
      ))}
    </>
  )
}

const Child3 = props => {
  return (
    <>
      <h1>This is coming from Parent Component using props Map method</h1>
      {props.propsdata3.map(value => (
        <li key={value.no}>
          My name is - {value.name}; <br />
          My Favourite color is - {value.color}
        </li>
      ))}
    </>
  )
}

export { Child, Child1, Child2, Child3 }

// export default Child2
