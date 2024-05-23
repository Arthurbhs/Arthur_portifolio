import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/Images/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/FileDownload';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

const  Hero = () => {
 
const StyleHero = styled("div")(() => ({
    backgroundColor: 'black',
    height: "100vh",
}))

const StyleAvatar = styled("img")(() => ({
  width: "70%",
  borderRadius: "50%",
}))

    return (
      <>
      <Container maxWidth='lg' >
       <StyleHero>
     
       <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
  <StyleAvatar src={Avatar}/>
  </Grid>
  <Grid item xs={12} md={8}>
   <Typography color="primary" variant="h2" textAlign="center" >Arthur Barbosa</Typography>
   <Typography color="primary" variant="h3" textAlign="center" >I am a front-end developer</Typography>
   <Grid container display="flex" justifyContent="center"  >
    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
    <Button> <DownloadIcon/>Download CV</Button>  

    </Grid>
 
    <Grid item xs={12} md={4} display="flex" justifyContent="center" >
    <Button><PermPhoneMsgIcon/>Contact me</Button>

    </Grid>
   </Grid>
  


  </Grid>

</Grid>
       </StyleHero>
       </Container>
      </>
    )
  }
  
  export default Hero
  