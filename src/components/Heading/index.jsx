import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from "../Auth/components/RegisterForm";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    // Here you can handle form submission, like sending data to server
    handleClose(); // Close the dialog after form submission
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phân Mềm quản lý chung cư
          </Typography>
          <NavLink to="/feature">
            <Button color="inherit">Free Gift</Button>
          </NavLink>
          <NavLink to="/song">
            <Button color="inherit">Song</Button>
          </NavLink>
          <NavLink to="/brawl">
            <Button color="inherit">Position</Button>
          </NavLink>
          <NavLink to="/callapi">
            <Button color="inherit">CallApi</Button>
          </NavLink>
          <NavLink to="/count_timer">
            <Button color="inherit">count_timer</Button>
          </NavLink>
          <NavLink to="/effect">
            <Button color="inherit">Effect</Button>
          </NavLink>
          <NavLink to="/usereducer">
            <Button color="inherit">Reducer</Button>
          </NavLink>
          <NavLink to="/hookform">
            <Button color="inherit">HookForm</Button>
          </NavLink>
          <Button color="inherit" onClick={handleClickOpen}>Đăng Nhập</Button>
        </Toolbar>
      </AppBar>
      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
          // Add aria-labelledby for accessibility
          'aria-labelledby': 'dialog-title',
        }}
      >
        <DialogTitle id="dialog-title">Đăng nhập nha hihi</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Register></Register>
          </DialogContentText>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
