import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    
 
    const setinputtow= setInput(' ')

    const setinputtoi= setImageUrl(' ')
    
   
   
 };
  

    return (
        <div className="messageSender">

            
            
{/* Messagsender__top starts */}
            
<div className="messageSender__top">
<Avatar />
<form >
    
<input value={ input } onChange={(e) => setInput(e.target.value)}
className="messageSender__input" placeholder="What's on your mind?" />

<input  value={ imageUrl } onChange={(e) => setImageUrl(e.target.value)}

placeholder="image Url (Optional)"/>

<button  onClick = {handleSubmit}  type="submit" >
    Hidden submit

</button>

</form>


</div>

{/* Messagsender__top ends */}


{/* Messagsender__bottom starts */}
<div className="messageSender__bottom">

<div className="messageSender__option">

<VideocamIcon style={{color: "red"}} />
<h3>Live Video</h3>

</div>


<div className="messageSender__option">

<PhotoLibraryIcon style={{color: "green"}} />
<h3>Photo/Video</h3>

</div>


<div className="messageSender__option">

<InsertEmoticonIcon style={{color: "orange"}} />
<h3>Feeiling/Activily</h3>

</div>

</div>

{/* Messagsender__bottom Ends */}


        </div>


    )
}


export default MessageSender
