import { AppBar, Box, Drawer, Grid, Toolbar, Typography } from "@mui/material";
import "./App.css";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";
import { ReactComponent as Menu } from "./assets/menu.svg";
import { ReactComponent as CompanyLogo } from "./assets/company_logo.svg";
import { ReactComponent as IconNotifications } from "./assets/icon_notifications.svg";
import { ReactComponent as IconSettings } from "./assets/icon_settings.svg";
import { ReactComponent as UserProfile } from "./assets/pic_user_profile.svg";
import { ReactComponent as IconChevronDrowpdown } from "./assets/icon_chevron-dropdown.svg";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid
              container
              spacing={2}
              item
              xs={4}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Menu />
              </Grid>
              <Grid item>
                <CompanyLogo />
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  noWrap
                  component="div"
                  sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Developer DAO
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6}></Grid>

            <Grid item xs={2} spacing={1} container alignItems="center">
              <Grid item>
                <IconNotifications />
              </Grid>
              <Grid item>
                <IconSettings />
              </Grid>
              <Grid item>
                <UserProfile />
              </Grid>
              <Grid item>
                <Typography gutterBottom>Nir Gazit</Typography>
              </Grid>
              <Grid item>
                <IconChevronDrowpdown />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          backgroundColor: "#F5F7FA",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          paddingLeft: "56px",
          paddingTop: "116px",
        }}
      >
        <Dashboard />
      </Box>
      <Drawer
        sx={{
          width: "328px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "328px",
            boxSizing: "border-box",
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
