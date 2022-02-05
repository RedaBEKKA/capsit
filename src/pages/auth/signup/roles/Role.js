
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../assets/logo.png";
import roles from "../../../../assets/roles.png";
import './Role.css'


const Role = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

  const navigate =useNavigate()
  const handleClick = () => {
    navigate('/client')
  }
  const handleClickIcon = () => {
    navigate('/password')
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
          marginTop: 10,
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

          <div style={{textAlign: "center", fontWeight: "bold",fontSize: 16,color: '#484444',marginTop:10}}>Qui êtes-vous ?</div>
          <FormControl component="fieldset" style={{marginTop:20,margin:'30px 0px 20px 80px'}}>
            <FormLabel component="legend" style={{color: '#8AC191',fontSize: 16,borderBottom:'1px solid #EBEDF0'}}>Utilisateur Capsit</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{color: '#484444',fontSize: 16}}>
                <FormControlLabel value="admin" control={<Radio style={{color: '#26B965'}}/>} label="Super administrateur Capsit" style={{borderBottom:'1px solid #EBEDF0'}}/>
                <FormControlLabel value="collaborateur" control={<Radio style={{color: '#26B965'}}/>} label="Collaborateur Capsit"  style={{borderBottom:'1px solid #EBEDF0'}} />
                
            </RadioGroup>
            <FormLabel component="legend" style={{color: '#8AC191',fontSize: 16,borderBottom:'1px solid #EBEDF0',marginTop:30 }}>Utilisateur client</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{color: '#484444',fontSize: 16}}>
                <FormControlLabel value="torefacteur" control={<Radio style={{color: '#26B965'}}/>} label="Torréfacteur" style={{borderBottom:'1px solid #EBEDF0'}}/>
                <FormControlLabel value="gerant" control={<Radio style={{color: '#26B965'}}/>} label="Gérant"  style={{borderBottom:'1px solid #EBEDF0'}} />
                
                
            </RadioGroup>
            </FormControl>
          
            <Button
              variant="outlined"
              style={{
                color: "#26B965",
                border: "2px solid #26B965",
                borderRadius: "10px",
                fontWeight: "bold",
                marginLeft: '50px',
                marginBottom: '10px',
                width: "75%",
                fontSize: "16px",
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
          src={roles}
          alt="imageConnexion"
          style={{ width: "687px", height: 346,marginTop: "180px",marginLeft:100,marginRight:10  }}
        />
        <div style={{marginLeft:150,marginTop: "20px",color: '#B0B0B0',fontSize:16,textAlign:'center'}}>
        Accédez aux performances de vos machines<br/> en quelques clics, visualisez l’état courant de vos<br/> machines et les alertes maintenances.
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
            marginTop: 270,
            marginBottom: 10,
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

export default Role

