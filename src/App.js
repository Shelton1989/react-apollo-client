import React from 'react';

// Images
import logo from './assets/images/header.png';

// Views
import CategorySelectView from './views/CategorySelectView';
import PunchlineView from './views/PunchlineView';

const style = {
  application: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    margin: 'auto'
  },
  styledLogo: {
    width: 60
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

const App = () => {
  const { application, styledLogo, headerContainer, bodyContainer } = style
  return (
    <div style={application} >
      <h1 style={headerContainer} >
        <img alt="Chuck Norris Logo" style={styledLogo} src={logo} />CHUCK NORRIS WILL GET YOU
      </h1>
      <div style={bodyContainer} >
        <CategorySelectView />
        <PunchlineView />
      </div>
    </div>
  );
};

export default App;
