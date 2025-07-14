import React from 'react'

const Child1 = (props) => {
  return (
    <>
        <h1> This is the child in which we are using a props </h1>
        <p>It is coming from parent using props - {props.data_of_props[0].name} & location is - {props.data_of_props[0].location}</p>  {/* Sairin & Mira-road*/}
    </>
  )
}

const Child2 = ({destruct_props}) => {
  return (
    <>
        <h1> This is the child in which we are using a props with Destructure </h1>
        <p>It is coming from parent using props - {destruct_props[1].name} & location is - {destruct_props[1].location}</p>  {/* Ashish & kandivali */}
    </>
  )
}

const Child3 = (props) => {
return(
    <>
        <h1> This is the child in which we are using a props with Destructure with Map Method </h1>
        {
            props.map_props.map( item => (
                <li key={item.no}>
                    My name is - {item.name}. <br />
                    My Location is - {item.location}. <br />
                    My Favourite Color is - {item.color}.
                </li>
            ))
        }
    </>
)
}

const Child4 = ({destruct_map_props}) => {
return(
    <>
        <h1> This is the child in which we are using a props with Map Method & destructure </h1>
        {
           destruct_map_props.map( item => (
                <li key={item.no}>
                    My name is - {item.name}. <br />
                    My Location is - {item.location}. <br />
                    My Favourite Color is - {item.color}.
                </li>
            ))
        }
    </>
)
}

export {Child1, Child2, Child3, Child4}