import { Button } from '@material-ui/core';
import "./Login.css";
import {auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";



function Login() {
    const [ state , dispatch ] = useStateValue();

    const signin = () => {
        //Sign in
        auth
        .signInWithPopup(provider)
       .then((result) => {

        dispatch ({   

        type: actionTypes.SET_USER,
        user: result.user

       });
       
    })

       .catch((error) => alert (error.message ));


    };
    return (
        <div className= "login">
            <div className="login__Logo">

                < img  src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                alt="Loading" />


                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
                alt="Loading" />


            </div>

            <Button type="submit"  onClick={signin} >
                Sign in

                </Button>
            
        </div>
    )
}

export default Login
