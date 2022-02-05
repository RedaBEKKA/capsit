
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../assets/logo.png";
import register from "../../../../assets/register.png";
import './Password.css'

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
        width: "30ch",
      },
    },
  }));
const Password = () => {
    const classes = useStyles();
  const [state, setstate] = useState({
    password: "",
    confirmPassword: ""
    
  });
  const { password,confirmPassword} = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  }

  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/role')
  }
  const handleClickIcon = () => {
    navigate('/otp')
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
        <ArrowBackIcon style={{color:"#26B965",margin:"10px"}} onClick={handleClickIcon}  />
        <div
            className="newPass-title"
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

          <div style={{textAlign: "center", fontWeight: "bold",fontSize: 16,color: '#484444'}}>Entrez un mot de passe</div>
          <div style={{textAlign: "center", fontWeight: "normal", fontSize:10,color: '#484444',marginTop:10}}>Choisissez un mot de passe sécurisé comprenant au moins <br/> 8 caractères dont un chiffre et une lettre</div>
          <form className={classes.root} noValidate autoComplete="on" style={{margin:30,display: "flex",alignItems: "center",justifyContent: "center",flexDirection:"column" }}>
            <TextField
              id="standard-basic"
              label="Mot de passe"
              name="password"
              value={password}
              type="password"
              onChange={handleInputChange}
              fontSize="16"
              style={{marginTop:20}}
            />
            <div style={{ fontWeight: "normal", fontSize:10,color: '#484444',marginTop:10,marginRight:100}}>Sécurité du mot de passe : <span style={{color: 'red'}}>Faible</span></div>
            <TextField
              id="standard-basic"
              label="Confirmation de mot de passe"
              name="confirmPassword"
              value={confirmPassword}
              type="password"
              onChange={handleInputChange}
              fontSize="16"
              
            />
            
            <Button
              variant="outlined"
              style={{
                color: "#26B965",
                border: "2px solid #26B965",
                borderRadius: "10px",
                fontWeight: "bold",
                marginLeft: '-8px',
                marginBottom: '10px',
                marginTop: '80px',
                width: "75%",
                fontSize: "16px",
              }}
              onClick={handleClick}
            >
              Suivant
            </Button>
            
          </form>
        </div>
        </div>
        <div classname='register-content-image' style={{display: "flex", flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
        <div className="register-image" style={{}}>
        <img
          src={register}
          alt="imageConnexion"
          style={{ width: "621px", height: 364,marginTop: "180px",marginLeft:150  }}
        />
        <div style={{marginLeft:150,marginTop: "20px",color: '#B0B0B0',fontSize:16,textAlign:'center'}}>
        Avec la plateforme Capsit, paramétrez votre machine à distance et augmentez votre<br/> 
        productivité ! Vous pouvez aussi accéder aux statistiques et aux fonctionnements de 
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
            À propos
          </Link>
          <Link to="" style={{ color: "#B0B0B0", marginRight: 100 }}>
            Conditions générales d’utilisations
          </Link>
          <Link to="" style={{ color: "#B0B0B0", marginRight: 100 }}>
            Politique de confidentialité
          </Link>
          <Link to="" style={{ color: "#B0B0B0" }}>
            Contact
          </Link>
        </div>
        </div>
    )
}

export default Password

