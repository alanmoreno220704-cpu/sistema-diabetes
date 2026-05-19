import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";


export default function Navbar({ toggleDrawer, toggleCollapse }) {

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = () => {
    if (isMobile) {
      toggleDrawer();
    } else {
      toggleCollapse();
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        background: "rgba(15,23,42,0.85)",
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>

        {/* MENU BUTTON */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleMenu}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* TITLE */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Desarrollo Web
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* AUTH AREA */}
        <Stack direction="row" spacing={2} alignItems="center">

          {(
            <>
              {/* LOGIN */}
              <Button
                color="inherit"
                startIcon={<LoginIcon />}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              {/* REGISTER */}
              <Button
                variant="contained"
                startIcon={<PersonAddIcon />}
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </>
          )}

        </Stack>

      </Toolbar>
    </AppBar>
  );
}