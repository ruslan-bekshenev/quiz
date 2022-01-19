import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const handleShowDrawer = () => setShowDrawer(!showDrawer);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleShowDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Drawer open={showDrawer} onClose={handleShowDrawer}>
          <Box>
            <List>
              <ListItem>
                <Link to="/quiz">asd</Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Header;
