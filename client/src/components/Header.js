import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const styles = {
  root: {
    background: '#FFFFFF',
  },
  content: {
    width: '100%',
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  pageTitle: {
    color: '#000000',
  },
};

const Header = () => (
  <AppBar position="static" sx={styles.root}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={styles.content}>
          <Typography variant="h5" sx={styles.pageTitle}>ProjectHub</Typography>
          <IconButton onClick={() => {}} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;