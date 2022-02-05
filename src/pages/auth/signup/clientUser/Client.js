
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../assets/logo.png";
import client from "../../../../assets/client.png";
import './Client.css'

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
        width: "30ch",
      },
    },
  }));
const Client = () => {
   

  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/gerant')
  }
  const handleClickIcon = () => {
    navigate('/role')
  }
  const classes = useStyles();
  const [state, setstate] = useState({
    nameOrganisation: "",
    nom: "",
    prenom: "",
    responsable: "",
    numTel: ""
  });
  const { nameOrganisation,nom,prenom,responsable,numTel } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
    return (
        <div 
        className="register"
        style={{ display: "flex", flexDirection: "column",alignItems: "center"}}>
        <div
        className="register-header"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: '10px',  
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
            boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "15px",
            height: '474px !important',
            width: "400px !important"
          
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

          <div style={{textAlign: "center", fontWeight: "bold",fontSize: 16,color: '#484444',marginTop:10}}>Vous êtes un utilisateur client</div>
          <div style={{textAlign: "center", fontWeight: "400px",fontSize: 10,color: '#484444',marginTop:10}}>Tous les champs marqués de * sont obligatoires <br/>et pourront être modifiés ultérieurement</div>
          <form className={classes.root} noValidate autoComplete="on" style={{margin:30}}>
            <TextField
              id="standard-basic"
              label="Nom Organisation*"
              name="nameOrganisation"
              value={nameOrganisation}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <TextField
              id="standard-basic"
              label="Nom*"
              name="nom"
              value={nom}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <TextField
              id="standard-basic"
              label="Prenom*"
              name="prenom"
              value={prenom}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <TextField
              id="standard-basic"
              label="Responsable"
              name="responsable"
              value={responsable}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <TextField
              id="standard-basic"
              label="Numero de telephone"
              name="numTel"
              value={numTel}
              type="number"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />
            

            
          
          

            <br />
            <Button
              variant="outlined"
              style={{
                color: "#26B965",
                border: "2px solid #26B965",
                borderRadius: "10px",
                fontWeight: "bold",
               
                fontSize: "16px",
                marginLeft: '30px',
                marginBottom: '10px',
               
                width: "75%",
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
          src={client}
          alt="imageConnexion"
          style={{ width: "486px", height: 422,marginTop: "180px",marginLeft:100,marginRight:10  }}
        />
        <div style={{marginLeft:150,marginTop: "20px",color: '#B0B0B0',fontSize:16,textAlign:'center'}}>
        <span style={{fontWeight: "bold"}}>Enregistrez vos réglages préférés</span>, en fonction<br/>du type de grain à moudre dans vos recettes.<br/><span style={{fontWeight: "bold"}}>Le système vous permet d’aller jusqu’à 50 recettes !</span>
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
            marginTop: 160,
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

export default Client

