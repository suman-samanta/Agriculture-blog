import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import './write.css';

const Write =()=>{

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [file,setFile]=useState(null);
    const {user}=useContext(Context);
    
    const handleSubmit=async (e)=>{
      e.preventDefault();

      const newPost={
        username:user.username,
        title,
        desc
      }

      if(file){
        const data= new FormData();

        const filename=file.name;
        data.append("name",filename);
        data.append("file",file)
        newPost.photo=filename

        try{
           await axios.post("http://localhost:5000/api/upload")

        }catch(err){
          console.log(err)
        }
      }

     try{
        const res= await axios.post("http://localhost:5000/api/posts",newPost)

        window.location.replace("/post/"+res.data._id)
     }catch(err){

        console.log(err);
     }

    } 

    return(
        <>
          <div className="write" >
           {file &&
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
           }
          
           
             <form className="writeForm" onSubmit={handleSubmit}>
                  <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                      <i className=" writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" formAction="/uploadmultiple" id="fileInput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>

                    {/* <select id="Category">
                       <option value="category">Select Category </option>
                    </select> */}

                  </div>
                  

                  <div className="writeFormGroup">
                      <textarea placeholder="Tell Your Story..." type="text" className="writeInput writeText"  onChange={(e)=>setDesc(e.target.value)}>

                      </textarea>
                  </div>
                 <button className="writeSubmit" type="submit"> Publish</button>
             </form>
           </div>
        </>
    )
}

export default Write;