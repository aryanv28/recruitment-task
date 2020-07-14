import React, { useState,useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

//UserDetails is like a bootstrap card that displays various details of the user on main page
function UserDetails(props) {
  const [user, setUser] = useState({
    isError: false,
    name: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });
  let userUrl = "/users/" + props.userID;
  useEffect(()=>{axios
    .get("https://jsonplaceholder.typicode.com/users/" + props.userID)
    
    .then(res=>{setUser(
      {
        isError:false,
        name:res.data.name,
        email:res.data.email,
        phone:res.data.phone,
        website:res.data.website,
        company:
        {
          name:res.data.company.name,
          catchPhrase:res.data.company.catchPhrase,
          bs:res.data.company.bs
        }
      }
    )})
    .catch(error => {
      setUser(prevState=>{return {...prevState,[prevState.isError]:true}});
      //console.log(error)
    });},[]);
  return user.isError ? (
    <h1>Error</h1>
  ) : (
    <div className="userDiv" >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <h4>{user.company.name}</h4>
      <h4>{user.company.catchPhrase}</h4>
      <p>
        <b>{user.company.bs}</b>
      </p>
      
      <NavLink to={userUrl}>details</NavLink>
      
    </div>
  );
}

export default UserDetails;
