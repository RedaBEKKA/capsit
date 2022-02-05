
import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../assets/logo.png";
import register from "../../../../assets/register.png";
import OtpInput from 'otp-input-react';
import './Otp.css'


const Otp = () => {
  
  const [state, setstate] = useState({
    otp: "",
    
  });
 

  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/password')
  }
  const handleClickIcon = () => {
    navigate('/register')
  }
  const handleChange = (otp) => setstate({ otp });
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
            
            marginRight:'1200px'
           
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

          <div style={{textAlign: "center", fontWeight: "bold",fontSize: 16,color: '#484444'}}>Validez votre adresse mail</div>
          <div style={{textAlign: "center", fontWeight: "normal", fontSize:12,color: '#484444',margin: "10px 30px 10px 30px" }}> Un code à 6 caractères vous a été envoyé à cette adresse :<br/>
          <span style={{textAlign: "center", fontWeight: "bold"}}>test@capsit.fr</span><br/>
           Le code reste actif pendant 10 minutes après son émission.
           </div>
           <OtpInput
                value={state.otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>{''}</span>}
                style={{display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginTop:60,color: '#B0B0B0'}}
               />
          
            
            <div class="register-text" style={{textAlign: "center",fontSize: "10px",marginTop: "100px"}}>
            Vous n’avez pas reçu de code ?<Link to="" style={{color: "#26B965"}}>Renvoyer</Link>
            </div>

            
            
            <Button
              variant="outlined"
              style={{
                color: "#26B965",
                border: "2px solid #26B965",
                borderRadius: "10px",
                fontWeight: "bold",
                marginTop: 40,
                fontSize: "16px",
                width: "50%",
                marginLeft:90
              }}
              onClick={handleClick}
            >
              Suivant
            </Button>
            
          
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

export default Otp
