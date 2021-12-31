import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import  StoryReel from "./StoryReel"
import Post from "./Post"


function Feed() {
    return (
        <div className="feed" >
            
{/* StoryReel Starts */}

<StoryReel />

{/* StoryReel Ends */}

{/* MessageSender Starts */}

<MessageSender />

{/* MessageSender  Ends*/}


{/* Posts starts */}

<Post profilepic= "https://i.ytimg.com/vi/KN8E8LDCppY/maxresdefault.jpg" 
      message="This is working"
      timestamp="timestamp"
      username="Ali Sultan"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeGo9pvXDahGOABXBkgb2vkmed4zUO-zuCw&usqp=CAU"


/>
<Post 
 profilepic= "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/100616304/original/dadefa1a2630f939d771ab114da5381dd9b6eb22/create-any-kind-of-graphic-design-with-idea.jpg" 
 message="This is working"
 timestamp="timestamp"
 username="Saad"
/>
<Post />



{/* Posts Ends */}

        </div>
    )
}

export default Feed
