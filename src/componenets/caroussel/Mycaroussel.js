import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import classes from './Mycaroussel.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    imgPath:
      'https://image.freepik.com/vecteurs-libre/gens-qui-preparent-differentes-methodes-cafe_23-2148664517.jpg',
  },
  {
    imgPath:
      'https://image.freepik.com/photos-gratuite/tasse-cafe-coeur-dessine-dans-mousse_1286-70.jpg?1',
  },
  {
    imgPath:
      'https://image.freepik.com/photos-gratuite/tasse-cafe-chaud_144627-21750.jpg',
  },
  {
    imgPath:
      'https://image.freepik.com/psd-gratuit/maquette-capsule-cafe_149660-785.jpg',
  },
];

export const Mycaroussel = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1 }} className={classes.mabox}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 0,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  margin: 0,
                  height: 980,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}
