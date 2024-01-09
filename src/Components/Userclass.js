import React from "react";

class Userclass extends React.Component {
   constructor(props){
   super(props);
    this.state={
      userInfo:{
        name:"dummyname",
        location:"Banswada",
        URL:""
      }
    }
  }
      async componentDidMount(){
                 const url="https://api.github.com/users/Samanvith20"
                 const data= await fetch(url)
                 const json= await data.json();
                 console.log(json);
                 this.setState({
                     userInfo:json
                 })
          }
 
    render() {
       const{name,location,url,bio}=this.state.userInfo
     
    return (
      <div className="user-details">
        <p>My name: {name + "reddy" }</p>
        <p>Bio: {bio}</p>
        <p>Location: {location}</p>
        <p>Github: <a href={url} >{url}</a></p>
        <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/yervala-samanvith-reddy-60568b1b0" >
        https://www.linkedin.com/in/yervala-samanvith-reddy-60568b1b0
        </a>
      </p>
      <h3> Skills</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
         <li>HTML</li>
         <li>CSS</li>
         <li>DSA</li>
         <li>SQL</li>
          </ul>
           
      </div>
    );
  }
}

export default Userclass;
