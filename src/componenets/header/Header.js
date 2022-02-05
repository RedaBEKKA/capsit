import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import classes from "./Header.module.scss"
import i18next from 'i18next';
import { useSelector } from "react-redux";



export const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector(state => state.auth.user)

  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang) => {
    i18next.changeLanguage(lang)
    setAnchorEl(null);
  };

  const languages = [{
    code: 'fr',
    name: 'français'
  },
  {
    code: 'en',
    name: 'anglais'
  }

  ]
  console.log(user)

  return (

    <div className={classes.header}>
      <div>
       {user.email}
      </div>
      <div style={{ alignItems: "center" }}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          langue
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {languages.map(lang =>
            <MenuItem key={lang.code} onClick={() => handleClose(lang.code)}>{lang.name}</MenuItem>)}

        </Menu>
      </div>


    </div>


  )
}

export default Header
