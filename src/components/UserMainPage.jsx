import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { NavLink } from "react-router-dom";


//PostTitle is the component that renders a link to the post route and option to delete post
function PostTitle(props){
  let postTitle = "";
  if(props.title.length>50){
    postTitle = props.title.slice(0,50) + "...";
  }
  else{
    postTitle = props.title;
  }
  let arrow = "->";
  return (
    <div>
      <button postId = {props.postId} onClick={props.onClick}>Delete</button>
      <NavLink to="/users/{id}/:postId">
        <h3>{postTitle}</h3>
        <p>{arrow}</p>
      </NavLink>
    </div>
  );

}


//UserMainPage renders all the post title and buttons to go back/add post
function UserMainPage() {
  let {id} = useParams(); 
  const [arrPosts,setPosts] = useState([]);
  const [isError,setError] = useState(false);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      let newArr =  response.data.filter((obj)=>{obj.userId===id});
      setPosts(newArr);
      console.log(response.data);
    })
    .catch(err=>{
      setError(true);
    })
  },[]);

  function handleDelete(event){
    let postId = event.target.postId;  
    
    let newArr = arrPosts.filter(obj=>{
      return obj.id !== postId;
    });
    setPosts(newArr);
    axios.delete('https://jsonplaceholder.typicode.com/posts/:postId')
    .then(response=>{console.log(response)})
  }

  return (isError?<h1>Error</h1>:<h1>userId of this user = {id}</h1>);
}

export default UserMainPage;
