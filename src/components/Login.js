import React ,{useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom" ;
import { auth ,provider } from "../firebase";
import { signInWithPopup , signOut ,onAuthStateChanged} from "firebase/auth";
import{ selectUserName ,
        selectUserPhoto,
        setUserLogin
        } from "../features/user/userSlice";
import { useDispatch, useSelector }  from "react-redux" ;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth ,async(user) => {
        if(user){
          dispatch(setUserLogin({
       name: user.displayName,
       email: user.email,
       photo: user.photoURL
     }))
     navigate("/home");
        }
    })
  },[])


  const signIn =() => {
    signInWithPopup(auth ,provider)
    .then((result) => {
      let user = result.user;
     dispatch(setUserLogin({
       name: user.displayName,
       email: user.email,
       photo: user.photoURL
     }))
     navigate("/home");
    })
  }
  return( 
  <Container>
   <CTA>
    <CTALogoOne src="./images/cta-logo-one.svg" />
    <SignUp onClick={signIn}> GET ALL THERE</SignUp>
    <Description>
     Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
    </Description>
    <CTALogoTwo src="./images/cta-logo-two.png" />
   </CTA>
  </Container>
  );
}

export default Login;

const Container = styled.div`
position:relative;
height: calc(100vh - 70px);
display:flex;
align-items:top;
justify-content :center;


&::before{
 content: "";
 background-image: url("./images/login-background.jpg");
 background-position: top;
 background-size: cover;
 background-repeat: no-repeat;
 position: absolute;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 opacity:0.7;
 z-index:-1;

}

`

const CTA = styled.div`
width: 90%;
max-width: 650px;
padding: 80px 40px;
display:flex;
flex-direction:column;
align-items:center;
margin-top: 100px;

`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding:17px 0 ;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover{
 background-color: #0483ee;
}
`

const Description = styled.p`
font-size: 11px;
text-align:center;
letter-spacing: 1.5px;
line-height:1.5;

`

const CTALogoTwo = styled.img`
width: 90%;

`
