import React from 'react'
import { postData } from '../Data/data'
import "../Styles/Post.css"
import BookMark from "../Images/mark.png"
import { useDispatch } from 'react-redux'
import { savePost } from '../StateManagement/postSlice'


function Post() {
  const dispatch = useDispatch();
  const handleSavePost = (index)=>{
    dispatch(savePost({id:index}));
    console.log(index);
    alert("Post Saved Successfully");
  }
  return (
    <div className='allPost'>
      {
        postData.map((ele,index)=>{
          return <div key={index} className='post'>
            <img className='photo' src={ele['image_url']} alt='unable to load'/>
            <div>{ele["played_by"]}</div>
            <div>{ele["character_name"]}</div>
            <div>{ele["movie"]}</div>
            <img onClick={()=>handleSavePost(index)} className='icon' src={BookMark} alt='unable to load'/>
          </div>
        })
      }
    </div>
  )
}

export default Post