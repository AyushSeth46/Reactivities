
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { BrowserRouter, Link } from 'react-router-dom';

interface Props {
  openForm : () => void;
}

function Navigation( {openForm} : Props) {
  const createButtonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    '&:hover': {
      backgroundColor: '#ba000d',
    },
  };

  return (
    <div>
        <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Reactivities
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={Link} to="/">
            All
          </Button>
          <Box sx={{ width: '10px' }} />
          <Button onClick={openForm} style={createButtonStyle} component={Link} to="/create">
            Create
          </Button>
        </Toolbar>
      </AppBar>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
