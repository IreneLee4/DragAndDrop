import React from "react";
import MuiDrawer from "../Material/Drawer/Drawer";
import Box from "../Material/Box/Box";
import Typography from "../Material/Typography/Typography";
import Divider from "../Material/Divider/Divider";
import List from "../List/HeaderList";

const drawerWidth = 240;

const Drawer = ({ handleDrawerToggle, container, mobileOpen, list }) => {
  return (
    <MuiDrawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Drag and Drop
        </Typography>
        <Divider />
        <List list={list} />
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
