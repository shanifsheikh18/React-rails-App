import React from 'react'
import { Link } from "react-router-dom";
import {Container, Grid, Box, Typography, Button, makeStyles,List,ListItem} from '@material-ui/core'
const useStyles = makeStyles ({
    btn: {
        color: "white",
        backgroundColor: "#828bff",
        padding: "8px",
        borderRadius: "6px",
        '&:hover': {
            backgroundColor: "#5159bf",
        },
    },
    img: {
        width: "80%",
        height: "100%",
        objectFit: "contain",
        animation: "$slideDown  3s infinite"
    },
    "@keyframes slideDown": {
        "0%": {
            
            transform: "translateY(0px)"
        },
        "50%": {
           
            transform: "translateY(30px)"
        },
        "100%": {
          
            transform: "translateY(0px)"
        }
    },

    playbtn: {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
	    textAlign: "center",
        color:"white",
        '&:hover': {
            color: "#5159bf",
        },
    }
})
const AboutStyle = {
    myContainer: {
        textAlign: "center"
    },
    myTitle: {
        textAlign: "center",
        padding: "40px 30px"
    },

    myGrid: {
        padding:"6px"
    },
    
}
const About = () => {
    const classes = useStyles()
  return (
    <Box>
        <Container style={AboutStyle.myContainer}>

            <Box style={AboutStyle.myTitle}>
                <h1 style={{fontSize: "36px", fontWeight:"600"}}>About <span style={{color:"#828bff"}}>Us</span></h1>
            </Box>

            <Grid style={{width:"80%", margin:"auto", marginBottom:"40px"}} container spacing={1} >
                <Grid item xs={12} sm={12}  md={6} style={AboutStyle.myGrid}>
                    <h1 style={{textAlign:"left", fontSize:"32", fontWeight:"600",marginBottom:"16px"}}>About OTS.</h1>
                    <Typography style={{textAlign:"left", padding: "20px 0 24px", fontSize:"16px"}}>
                        ShopLead is a product-hunting website. ShopLead is about hitting multiple 
                        e-commerce websites and doing Product Hunting. It saves the user a lot of time 
                        and effort. So the time it takes the user to find and select from multiple
                        e-commerce sites, ShopLead will save that. ShopLead will run automated scripts 
                        to scrape the data and use it to show users the wanted search product and it 
                        will also give a tracking option so users can track and pin their product.
                    </Typography>
                    <Button className={classes.btn}>
                        <Link style={{textDecoration: "none", color: "white"}} to="/signup">
                            Just Signup
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} style={AboutStyle.myGrid}>
                    <img className={classes.img} src="https://thehelpfultipper.github.io/build_figma_design/imgs/iPhone-15.png"/>
                </Grid>
            </Grid>

            <Grid container style={{marginTop:"8%", marginBottom:"20px"}}>
                <Grid item md={6} style={{padding:"6px 10px"}}>
                    <Box >
                        <Typography variant="h4" style={{fontWeight:"bold",textAlign:"left"}} >Voluptatem provident quasi corporis</Typography>
                        <img src="https://thehelpfultipper.github.io/build_figma_design/imgs/iPhone-15.png" alt=""/>
                        <Typography style={{fontStyle: 'italic'}}>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</Typography>
                        <Typography style={{fontStyle: 'italic'}}>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</Typography>
                    </Box>
                </Grid>
                <Grid item md={6} style={{padding:"6px 10px"}}>
                
                    <Typography style={{textAlign:"left",fontStyle: 'italic'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </Typography>
                    <List>
                        <ListItem><i className="fa-solid fa-square-check" style={{margin:"0 6px",color:"#828bff"}}></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</ListItem>
                        <ListItem><i className="fa-solid fa-square-check" style={{margin:"0 6px",color:"#828bff"}}></i> Duis aute irure dolor in reprehenderit in voluptate velit.</ListItem>
                        <ListItem><i className="fa-solid fa-square-check" style={{margin:"0 6px",color:"#828bff"}}></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender.</ListItem>
                    </List>
                    <Typography style={{textAlign:"left"}}>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </Typography>

                    <Box style={{position: "relative"}}>
                        <img src="https://thehelpfultipper.github.io/build_figma_design/imgs/iPhone-15.png" alt=""/>
                        <a href="https://www.youtube.com/watch?v=WOdnRhWeHoY" className={classes.playbtn}><i className="fa-solid fa-play" style={{fontSize:"40px",padding:"40px",border:"2px solid #828bff", borderRadius:"50%",background:"#828bff"}}></i></a>
                    </Box>
                    
                </Grid>
            </Grid>

        </Container>
    </Box>
  )
}

export default About