import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import './App.css';
import Dashboard from './Dashboard';
import SideBar from './SideBar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            noWrap
            component="div"
            sx={{ fontSize: 20, fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
          >
            Developer DAO
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          backgroundColor: "#F5F7FA",
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          paddingLeft: "56px",
          paddingTop: "116px"
        }}
      >
        <Dashboard />
      </Box>
      <Drawer
        sx={{
          width: "328px",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "328px",
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Box sx={{ paddingTop: "44px", paddingLeft: "40px" }}>
          <SideBar />
        </Box>
      </Drawer>
    </Box>
  );
}

export default App;
