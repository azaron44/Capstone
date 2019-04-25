import React, { Component } from 'react';
import './Planner.css';
import axios from 'axios';
import TripList from './TripList';

class Planner extends Component {
  state = {
    trip:{
    name: "",
    email: "",
    departDate: "",
    returnDate: "",
    location: "",
    hotel: "",
    items: ['name', 'departDate', 'returnDate', 'location', 'hotel'],
    item: '',
    map:{},
    dataSource: []
    }
  }

  add  = (event) =>{
    let newItems = [...this.state.items];
    newItems.push(this.state.item);
    this.setState(
        {
            items:newItems,
            item:''
        }
    )

}

handleChange = (event) => {
  this.setState(
      {
          item:event.target.value
      }
  )
}

  

  tripTableSubmitHandler = (event)=>{
    event.preventDefault();
    const trips = {
      name:this.state.name,
      email:this.state.email,
      departDate:this.state.departDate,
      returnDate: this.state.returnDate,
      location: this.state.location,
      hotel: this.state.hotel
     
    }

    axios.post("http://localhost:8080/createTable",trips)
    .then( (response) =>{
      //Route to a thank you page
      this.props.history.push('/my-trips');

    } )
  

  }

  tripHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    let tempTrip = {...this.state.trip};
    tempTrip [name] = value;
    this.setState(
      {
        trip:tempTrip
      }

    )
  }

  change = e => {
    this.setState ({
      [e.target.name]: e.target.value
    
    
    });
    
      }

      constructor(props) {

        super(props)
          this.state = {
            dataSource: []
          }
        
      }

      renderItem = () => {

      }

      componentDidMount(){
        axios.get("http://localhost:8080/createTable")
        .then( (response) => {
          this.setState ({dataSource: response.data});
           
        }) 
        .then(
        this.props.history.push('/my-trips'));
          
          
        }
        tripTable(){
          return this.state.dataSource.map(function(change, i){
            return <TripList chan={change} key={i} />
          })
        }
       
  
  

      

      
        

  



    render() {
        return (
            <div>
                <form onSubmit={this.tripTableSubmitHandler} className="container">
            
            <div className="form-row">
            <div className="col">
              <label for="name">Client:</label>
                <input onChange={e => this.change(e)} value={this.state.name} name="name" type="text" className="form-control" placeholder="Client Name"/>
              </div>
              <div className="col">
              <label for="email">Email:</label>
                <input onChange={e => this.change(e)} value={this.state.email} name="email" type="text" className="form-control" placeholder="Customer Email"/>
              </div>
              <div className="col">
              <label for="depart_date">Depart Date:</label>
                <input onChange={e => this.change(e)} value={this.state.departDate} name="departDate" type="text" className="form-control" placeholder="Enter Date"/>
              </div>
              <div className="col">
              <label>Return Date:</label>
                <input onChange={e => this.change(e)} value={this.state.returnDate} name="returnDate" type="text" className="form-control" placeholder="Enter Date"/>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
              <label>Location</label>
                <input onChange={e => this.change(e)} value={this.state.location} name="location" type="text" className="form-control" placeholder="Location"/>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
              <label for="hotel">Hotel</label>
                <input onChange={e => this.change(e)} value={this.state.hotel} name="hotel" type="text" className="form-control" placeholder="Hotel"/>
              </div>
               <button  type="submit">Submit</button>
            </div>
          </form>
          <br/><br/><br/><br/><br/>

          {/* <React.Fragment>
          <table className="container">
  <tr className>
    <th>Customer Name </th>
    <th>Depart Date</th>
    <th>Return Date</th>
    <th>Location</th>
    <th>Hotel </th>
  </tr>
  <tr>
    <td value={this.setState.name}></td>
    <td value={this.state.depart_date}></td>
    <td value={this.state.return_date}></td>
    <td value={this.state.location}></td>
    <td value={this.state.hotel}></td>
  </tr>
  <tr>
    <td></td>
    <td>{this.tripHandler}</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  
</table>

</React.Fragment> */}
            </div>
        );
    }
}

export default Planner;