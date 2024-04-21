import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'A wise person should have money in their head, but not in their heart.',
    imgPath:
      'https://i.ibb.co/WcXkQjy/money-Banner-1.jpg',
  },
  {
    label: 'It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages.',
    imgPath:
      'https://i.ibb.co/dt3Nbyx/money-Banner-2.jpg',
  },
  {
    label: ' I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. (Warren Buffet)',
    imgPath:
      'https://i.ibb.co/hLvPkH7/money-Banner-3.jpg',
  },
  {
    label: 'Money is like love; it kills slowly and painfully the one who withholds it, and enlivens the other who turns it on his fellow man. (Kahlil Gibran)',
    imgPath:
      'https://i.ibb.co/pLW3p5v/money-Banner-4.jpg',
  },
  
];

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1200, flexGrow: 1, mx: 'auto', my: 2 }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >

        {images.map((step, index) => (
          <div key={step.label} >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box sx={{position:"relative"}}>
                <Typography  sx={{position:"absolute", zIndex:20, fontSize:'32px', fontWeight:'700', width:'500px', top:'100px', left:'150px', color:"#eeff41"}}>{step.label}</Typography>
                <Box 
                  component="img"
                  sx={{
                    height: 400,
                    display: 'block',
                    maxWidth: 1200,
                    overflow: 'hidden',
                    width: '100%',
                   
                  }}
                  src={step.imgPath}
                  alt={step.label}
                /></Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Banner;