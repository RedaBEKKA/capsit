
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import logo from "../../../../assets/logo.png";
import torrefacteur from "../../../../assets/torrefacteur.png";
import './torrefacteur.css'

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
        width: "30ch",
      },
    },
  }));
const Torrefacteur = () => {
   

  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/dashboard')
  }
  const handleClickIcon = () => {
    navigate('/client')
  }
  const classes = useStyles();
  const [state, setstate] = useState({
    
    type: "",
    site: "",
    description: "",
    
  });
  const { type,description,site} = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const [pays, setPays] = useState('')
  const handleChange = (event) => {
    setPays(event.target.value);
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

          <div style={{textAlign: "center", fontWeight: "bold",fontSize: 16,color: '#484444',marginTop:10}}>Bienvenue Torréfacteur</div>
          <div style={{textAlign: "center", fontWeight: "400px",fontSize: 10,color: '#484444',marginTop:10}}>Tous les champs marqués de * sont obligatoires <br/>et pourront être modifiés ultérieurement</div>
          <form className={classes.root} noValidate autoComplete="on" style={{margin:30}}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Pays</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={pays}
              onChange={handleChange}
              label="Pays"
            >
              
              <MenuItem value={10}>France</MenuItem>
              <MenuItem value={20}>Gabon</MenuItem>
              <MenuItem value={30}>Gambie</MenuItem>
              <MenuItem value={40}>Géorgie</MenuItem>
              <MenuItem value={50}>Ghana</MenuItem>
              <MenuItem value={60}>Gréce</MenuItem>
            </Select>
          </FormControl>
            <br />

            <TextField
              id="standard-basic"
              label="Type d’organisation*"
              name="type"
              value={type}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <TextField
              id="standard-basic"
              label="Site*"
              name="site"
              value={site}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <TextField
              id="standard-basic"
              label="Description de l’organisation*"
              name="description"
              value={description}
              type="text"
              onChange={handleInputChange}
              fontSize="16"
            />
            <br />

            <Button
              variant="outlined"
              style={{
                color: "#26B965",
                border: "2px solid #26B965",
                borderRadius: "10px",
                fontWeight: "bold",
                marginLeft: '30px',
                marginBottom: '10px',
                marginTop: '80px',
                width: "75%",
                fontSize: "16px",
              }}
              onClick={handleClick}
            >
              TERMINÉ
            </Button>
            
          </form>
          
           
            
         
        </div>
        </div>
        <div classname='register-content-image' style={{display: "flex", flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
        <div className="register-image" style={{}}>
        <img
          src={torrefacteur}
          alt="imageConnexion"
          style={{ width: "564px", height: 414,marginTop: "180px",marginLeft:100,marginRight:10  }}
        />
        <div style={{marginLeft:150,marginTop: "20px",color: '#B0B0B0',fontSize:16,textAlign:'center'}}>
        
        Accédez à  <span style={{fontWeight: "bold"}}>vos facturations, état de stocks sur vos différents<br/>sites de production et gestion de toutes vos machines.</span>
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

export default Torrefacteur


