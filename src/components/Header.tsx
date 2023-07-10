import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/material';

export const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      sx={{ backgroundColor: 'primary.dark', color: 'secondary.contrastText' }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ margin: 'auto' }}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;