import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps, Link } from '@mui/material';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = (
    <Box
        component="img"
        src="/favicon/Logo.png"
        sx={{ width: "100%", height: "100%", cursor: 'pointer', ...sx }}
      />
  );

  const fullLogo = (
    <Box
        component="img"
        src="/assets/logo/WinG.png"
        sx={{ width: "100%", height: "100%", cursor: 'pointer', ...sx }}
      />
  );

  return (
    <Link
      component={NextLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);
