import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component{
  
  constructor (props) {
    super(props);
    this.state = {
      numberOfFav :0,
    }}
    incrementNumber = () =>{
      this.setState({
        numberOfFav:this.state.numberOfFav+1
      })
    } 
  
  render(){
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imgUrl} />
      <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
              {this.state.description}
          😸Number of Pats: {this.state.numberOfFav}
          </Card.Text>
          <Button onClick={this.incrementNumber} variant="primary">pick</Button>
      </Card.Body>
  </Card>)
  }
}
export default HornedBeast;