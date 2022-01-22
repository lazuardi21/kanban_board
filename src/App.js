import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Navigation from './components/nav/Navigation';
import Wrapper from './components/Wrapper';

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  const [backgroundImage, setBackgroundImage] = useState('green')
  return (
    <div
      className={classes.root}
      style={{
        backgroundColor:backgroundImage,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}
    >
      <Navigation setBackgroundImage={setBackgroundImage} />
      <Wrapper />

    </div>
  );
}

export default App;
