import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import  NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




function Header() {
    return (
       <div className='header'>
       
       <div className='header__left' >
          <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="Loading" />
        
        <div className="header__input">   
          
<SearchIcon />
<input type="text" placeholder="Search Facebook" />

       </div></div>

    <div className="header__center">
<div className="header__option  header__option--active">

    <HomeIcon fontSize="Large"/>
</div>

<div className="header__option">

    <FlagIcon fontSize="Large"/>
</div>


    

    <div className="header__option">

    <SubscriptionsIcon fontSize="Large"/>
</div>


<div className="header__option">

<StorefrontIcon fontSize="Large"/>
</div>


<div className="header__option">

<SupervisedUserCircleIcon fontSize="Large"/>
</div>


    </div>
    

    <div className="header__right">

<div className="header__info">
    <Avatar />
    <h4>Ali Sultan</h4>
</div>

<IconButton>
    <AddIcon/>
</IconButton>

<IconButton>
    <ForumIcon/>
</IconButton>



<IconButton>
<NotificationsActiveIcon />
</IconButton>


<IconButton>
<ExpandMoreIcon/>
</IconButton>


{/* <IconButton> */}
{/* <ExpandMoreIcon/>
<IconButton/> */}

    </div>

    
       </div>

    )
}

export default Header
