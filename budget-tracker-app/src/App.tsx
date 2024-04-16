import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client'; // Adjusted import
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';

const App: React.FC = () => {
  const classes = useStyles();
  const { segment } = useSpeechContext(); // Accessing the segment instead of speechState
  const main = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (main.current && main.current.scrollIntoView) {
      main.current.scrollIntoView({ behavior: 'smooth' }); // Ensure main.current is defined before accessing its properties
    }
  };

  useEffect(() => {
    if (segment && segment.isFinal) {
      executeScroll();
    }
  }, [segment]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" subheader='aqq' />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" subheader='aaa' />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" subheader='sasa' />
        </Grid>
        {/* <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer> */}
      </Grid>
    </div>
  );
};

export default App;
