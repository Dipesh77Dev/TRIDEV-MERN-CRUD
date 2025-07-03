import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MovieProps1 = (props) => {
  console.log(props)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card style={{ width: '18rem', height: '30rem', overflow: 'hidden' }}>
        <Card.Img variant='top' src={props.img} />
        <Card.Body>
          <Card.Text>{props.no}</Card.Text>
          <Card.Title>{props.seriesName}</Card.Title>
          <Card.Text style={{ textWrap: 'nowrap' }}>{props.desc}</Card.Text>
          <a href={props.link} target='_blank'>
            <Button variant='primary'>Watch</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  )
}

const MovieProps = ({img, no, seriesName, desc, link}) => {
//   console.log(props)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card style={{ width: '18rem', height: '30rem', overflow: 'hidden' }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Text>{no}</Card.Text>
          <Card.Title>{seriesName}</Card.Title>
          {/* <Card.Title>{props.seriesName}</Card.Title> */}
          <Card.Text style={{ textWrap: 'nowrap' }}>{desc}</Card.Text>
          <a href={link} target='_blank'>
            <Button variant='primary'>Watch</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieProps;
