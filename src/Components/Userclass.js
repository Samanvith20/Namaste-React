import React from "react";

class Userclass extends React.Component {
   constructor(props){
   super(props);
    this.state={
      count1:1,
      count2:2,
    }
    
   }
    render() {
      const{count1,count2}= this.state
    return (
      <div className="user-details">
        <h1>I am student studying in {this.props.college}</h1>
           <h2>count:{count1}</h2>
           <h2>count:{count2}</h2>
        <h2>Hyderabad Telangana</h2>
      </div>
    );
  }
}

export default Userclass;
