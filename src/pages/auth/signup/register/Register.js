
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../assets/logo.png";
import register from "../../../../assets/register.png";
import './Register.css'
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
  }));
const Register = () => {
    const classes = useStyles();
  const [state, setstate] = useState({
    email: "",
    
  });
  const dispatch=useDispatch()
  const { email} = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  }



  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/otp')
  }
  const handleClickIcon = () => {
    navigate('/')
  }
    return (
        <div 
        className="register"
        style={{ display: "flex", flexDirection: "column",alignItems: "center"}}>
        <div
        className="register-header"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
         }}
      >
      <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'flex-start',
            
            marginRight:'1500px'
           
        }}
        >
        <Link to="" style={{ color: "#26B965" }}>
          capsit.fr
        </Link>
      </div>
        
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'flex-end',
            
            }}
        >
        <Link to="" style={{ color: "#26B965" }}>
          Fr
        </Link>
      </div>
          
        
      </div>
      <div className='register-content' style={{display: 'flex', flexDirection: 'row'}}>
      <div
        className="register-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="register-logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "270px", height: "152px", marginTop: "10px" }}
          />
        </div>
       
        <div
          className="register-form"
          style={{
            "boxShadow": " 0px 4px 4px rgba(0, 0, 0, 0.25)",
            "borderRadius": "15px",
            height: 474,
            width: "400"
          
          }}
        >
        <ArrowBackIcon style={{color:"#26B965",margin:"10px"}}  onClick={handleClickIcon} />
        <div
            className="register-title"
            style={{
              textAlign: "center",
              color: "#26B965",
              fontWeight: "bold",
              fontSize: 32,
              marginTop: 5,
            }}
          >
            Inscription
          </div>

          <div style={{textAlign: "center", fontWeight: "bold",fontSize: 16,color: '#484444',margin:"5px 50px 10px 50px"}}>Entrez votre adresse professionelle</div>
          <div style={{textAlign: "center", fontWeight: "normal", fontSize:10,color: '#484444',marginTop:10}}>Cette adresse mail sera utilis??e pour<br/> vous connecter ?? votre espace.</div>
          <form className={classes.root} noValidate autoComplete="on" style={{margin:30,display: "flex",alignItems: "center",justifyContent: "center",flexDirection:"column"}}>
            <TextField
              id="standard-basic"
              label="E-mail"
              name="email"
              value={email}
              type="email"
              onChange={handleInputChange}
              fontSize="16"
              style={{marginTop:30}}
            />
            <br />
            <div className="register-text" style={{textAlign: "center",fontSize: "10px",margin: "10px 10px 5px 10px",color: '#484444'}}>
                En cliquant sur <span style={{color: "black",fontWeight:'normal'}}>?? S???inscrire ??</span> , vous acceptez les <Link to="" style={{color: "#26B965"}}> conditions g??n??rales d???utilisation</Link> 
                et <Link to="" style={{color: "#26B965"}}>politique de confidentialit??</Link><br/><br/>Vous pouvez vous d??sinscrire ?? tout moment en faisant
                <br/>la demande dans la page profil ou ?? travers les liens
                de d??sinscription pr??sents dans nos mails.
            </div>

            
            
            <Button
              variant="outlined"
              style={{
                color: "#26B965",
                border: "2px solid #26B965",
                borderRadius: "10px",
                fontWeight: "bold",
                marginBottom: 10,
                fontSize: "16px",
              }}
              onClick={handleClick}
            >
              S'inscrire
            </Button>
            
          </form>
        </div>
        </div>
        <div className='register-content-image' style={{display: "flex", flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
        <div className="register-image" style={{}}>
        <img
          src={register}
          alt="imageConnexion"
          style={{ width: "621px", height: 364,marginTop: "180px",marginLeft:150  }}
        />
        <div style={{marginLeft:150,marginTop: "20px",color: '#B0B0B0',fontSize:16,textAlign:'center'}}>
        Avec la plateforme Capsit, param??trez votre machine ?? distance et augmentez votre<br/> 
        productivit?? ! Vous pouvez aussi acc??der aux statistiques et aux fonctionnements de 
        vos machines.
        </div>
      </div>
      </div>
      </div>
      <div
          className="register-footer"
          style={{
            display: "flex",
            justifyContent: "space-between",

            fontSize: "10px",
            marginTop: 250,
            marginBottom:10
          }}
        >
          <Link to="" style={{ color: "#B0B0B0", marginRight: 100 }}>
            ?? propos
          </Link>
          <Link to="" style={{ color: "#B0B0B0", marginRight: 100 }}>
            Conditions g??n??rales d???utilisations
          </Link>
          <Link to="" style={{ color: "#B0B0B0", marginRight: 100 }}>
            Politique de confidentialit??
          </Link>
          <Link to="" style={{ color: "#B0B0B0" }}>
            Contact
          </Link>
        </div>
        </div>
    )
}

export default Register
