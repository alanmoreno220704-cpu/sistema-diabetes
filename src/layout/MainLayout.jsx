import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { drawerWidth, collapsedWidth } from "./constants"
import { useState } from "react"

export default function MainLayout({ children }) {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const [open, setOpen] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const sidebarWidth = collapsed ? collapsedWidth : drawerWidth

  return (
    <Box sx={{ display: "flex" }}>

      <Navbar toggleDrawer={toggleDrawer} toggleCollapse={toggleCollapse} />

      <Sidebar
        open={open}
        collapsed={collapsed}
        isMobile={isMobile}
        onClose={toggleDrawer}
      />

    <Box
        component="main"
        sx={{
            flexGrow: 1,
            p: { xs: 2, md: 3, lg: 4 },
            transition: "all 0.3s"
        }}
    >

      
        <Toolbar />
        {children}
      </Box>

    </Box>
  )
}