import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import DashboardIcon from "@mui/icons-material/Dashboard"
import DevicesIcon from "@mui/icons-material/Devices"
import SettingsIcon from "@mui/icons-material/Settings"

import { Link, useLocation } from "react-router-dom"

import { drawerWidth, collapsedWidth } from "./constants"

export default function Sidebar({ open, onClose, isMobile, collapsed }) {

  const location = useLocation()

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Equipo", icon: <DashboardIcon />, path: "/Equipo" },
    { text: "CRUD", icon: <DevicesIcon />, path: "/crud" },
  ]

  const width = collapsed ? collapsedWidth : drawerWidth

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          mt: "64px",
          height: "calc(100% - 64px)",
          transition: "width 0.3s",
          overflowX: "hidden",
          borderRight: "1px solid #e5e7eb"
        }
      }}
    >
      <List sx={{ mt: 1 }}>

        {menuItems.map((item) => {

          const active = location.pathname === item.path

          const button = (
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => {
                if (isMobile) onClose()
              }}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? "center" : "initial",
                px: 2.5,
                mx: 1,
                borderRadius: 2,

                transition: "all 0.2s",

                ...(active && {
                  backgroundColor: "rgba(25,118,210,0.12)",
                  color: "#1976d2",
                  fontWeight: 600,
                }),

                "&:hover": {
                  backgroundColor: "rgba(25,118,210,0.08)"
                }
              }}
            >

              {/* ICON */}
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? "auto" : 3,
                  justifyContent: "center",
                  color: active ? "#1976d2" : "inherit"
                }}
              >
                {item.icon}
              </ListItemIcon>

              {/* TEXT */}
              {!collapsed && (
                <ListItemText primary={item.text} />
              )}

            </ListItemButton>
          )

          return collapsed ? (
            <Tooltip title={item.text} placement="right" key={item.text}>
              {button}
            </Tooltip>
          ) : (
            <div key={item.text}>{button}</div>
          )

        })}

      </List>
    </Drawer>
  )
}