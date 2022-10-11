import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

var footerComponent;

if (token != ""){
footerComponent =  <Grid
container
direction="row"
justifyContent="center"
alignItems="center"
>
<Grid alignItems="center" item xs={12} style={{backgroundColor: '#806251'}}>
  <Box>
    <Box
      paddingTop={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
      className="entrar"
        variant="h5"
        align="center"
        gutterBottom
        style={{ color: 'white' }}
      >
        Siga-nos nas redes sociais{' '}
      </Typography>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon style={{ fontSize: 60, color: 'white' }} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
      >
        <InstagramIcon style={{ fontSize: 60, color: 'white' }} />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
      >
        <LinkedInIcon style={{ fontSize: 60, color: 'white' }} />
      </a>
    </Box>
  </Box>
  <Box style={{ backgroundColor: '#806251', height: '60px' }}>
    <Box paddingTop={1}>
      <Typography
      className="entrar"
        variant="subtitle2"
        align="center"
        gutterBottom
        style={{ color: 'white' }}
      >
        © 2022 Copyright:
      </Typography>
    </Box>
    <Box>
      <a target="_blank" href="https://brasil.generation.org">
        <Typography className="entrar"
          variant="subtitle2"
          gutterBottom
          style={{ color: 'white' }}
          align="center"
        >
          Vanessa Isabella Oliveira
        </Typography>
      </a>
    </Box>
  </Box>
</Grid>
</Grid>
}
  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;