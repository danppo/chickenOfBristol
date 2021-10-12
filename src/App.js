import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ActivityIdeas from './sections/activityIdeas/activityIdeas';

import Header from './unit/header/header';

function App() {
  return (
    <Container maxWidth="lg">
      <ActivityIdeas />
    </Container>
  );
}

export default App;
