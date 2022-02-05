import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import TableExemple from "../../componenets/table/tableExemple";
import classes from './home.module.scss'
import Breadcrumb from '../../componenets/Breadcrumb'
import { Box, Button, Divider, Paper } from '@mui/material';
import { EnhancedTableToolbar } from '../../componenets/table/tableToolbar/tableToolbar'



const Home = props => {
    const { t } = useTranslation(['home'])
    const date = new Date();



    return (

        <div className={classes.home_container}>
            <Breadcrumb title={'Dashbord'} />
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <EnhancedTableToolbar title={'toolbar title'} >
                        <Button size="small" color="success" variant="outlined"
                        >
                            Inviter
                        </Button>

                    </EnhancedTableToolbar>
                    <Divider />

                    <TableExemple />

                </Paper>
            </Box>
        </div>

    );
};

Home.propTypes = {

};

export default Home;