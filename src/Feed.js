import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from './MessageSender';
import  StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";




function Feed() {

const [ posts, setPosts] = useState([]);
  


useEffect(() => {

    db.collection ('posts').orderBy('timestamp' , 'desc').onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()
       }))) 
        
    );
// db.collection("posts").get().then(res=>console.log(res))
}, []);
 

    return (
        <div className="feed" >
            


<StoryReel />
<MessageSender />




{posts.map((post) => (



<Post
key={post.id}
profilepic={post.data.profilepic}
message={post.data.message} 
timestamp={post.data.timestamp}
username={post.data.username}
image={post.data.image}

/>
))} 

        </div>

        
    );
}

export default Feed
