// import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function Projects(){
    const matches = useMediaQuery('(min-width:1000px)');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        textAlign: 'left',
        // color: theme.palette.text.secondary,
        border: '0.2px solid black',
        paddingTop: '4px',
        color: 'black',
        height: (matches? "200px": "400px"),
        // height: 'fit-content'        
      }));

    return (
        <div className="project-container">

            <section className="proj-intro">
                <div className="img-container-home" > 
                    <figure>
                    <img src="/pics/Matrix-code.webp" className="my-img"  alt="The matrix's green code raining" /> 
                    <figcaption className="img-wrapper">
                    <em> A stock image from the <s>Matrix</s> internet</em>
                    </figcaption>
                    </figure>
                </div>
            
                <div className="intro-to-proj">
                    <p>I like to get hands-on experience on various technology stacks through building my projects, which mostly pertain to web development. </p>
                    <p>Through my recent projects, I have acquired a decent understanding of HTML, CSS, JS, MERN stack, and GraphQL APIs. Also, I think APIs are really cool. APIs make cross platform collaboration way simpler and I was blown away by that.</p>
                    <p> I am exploring backend development further as it usually consists of many tricky moving pieces. I would also like to explore machine learning and neural networks.</p>
                </div>  
            </section>

        {/* sections for the projects listing */}
            <section className="projects-listing">
            <Box sx={{ width: '100%' }}>
            <Grid disableEqualOverflow className="parent-grid" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={6} className="proj-item" alignItems="left">
                    <Item>
                    <div className="proj-div">
                        <h3 className="proj-name"> Full Stack Blog Site</h3>
                    </div>
                    <ul>
                        <li> Used the MERN stack to build a full stack blog website featuring user authentication, server and mongo database hosting, and multiple server endpoints</li>
                        <li> Deployed the website to Google cloud, which was promptly taken down after success to avoid any monetary payments</li>
                    </ul>
                    </Item>
                   
                </Grid>
                <Grid item xs={6} className="proj-item">
                  <Item>
                  <div className="proj-div" style={{display:'inline'}}>
                        <h3 className="proj-name"> React Graph QL query</h3>
                    </div>
                    <ul>
                        <li> Designed a clean way to to query complex github user server data efficiently from GitHub API using GraphiQL</li>
                             {/* Making use of the github API, the interface allows you to pull information of github users such as their repositories and whatever else </li> */}
                        <li> Impletmented the functionality/state of the interface using React</li>
                        <li> Handled the styling using the powerful Bootstrap library</li>
                    </ul>
                    </Item>  
                </Grid>
                
                <Grid item xs={6} className="proj-item" alignItems="left">
                    <Item>
                    <div className="proj-div">
                        <h3 className="proj-name"> Hangman game in React</h3>
                    </div>
                    <ul>
                        <li> Chose this project as it was the perfect beginner React project since it was easy enough logic-wise, but still includeed many complicated problems to solve</li>
                        <li> Involed handling the state of the interface</li>
                    </ul>
                    </Item>
                   
                </Grid>

                <Grid item xs={6} className="proj-item">
                  <Item>
                  <div className="proj-div">
                        <h3 className="proj-name"> Snake Game using Turtle Graphics</h3>
                    </div>
                    <ul>
                <li>Used the turtle graphics library of Python to build the classic snake game</li>
                <li>Devised the game loop such that the game could reset after getting over </li>
                </ul>
                  </Item>
                </Grid>

                <Grid item xs={6} className="proj-item">
                  <Item>
                  <div className="proj-div">
                        <h3 className="proj-name"> Autonomous Sanitizing Robot</h3>
                    </div>
                    <ul>
                        <li>Designed a self autonomous robot using TinkerCAD, in my Engineering Design class, which could move based on its sensing of white and black squares on a 15 by 15 sheet  </li>
                        <li>Developed the algorithm to allow the robot to run on two axes, with two team members resulting in a nice team building activity overall </li>

                    </ul>
                    </Item>  
                </Grid>
        
            </Grid>
            </Box>
        
            </section>
        
           

        
        </div>
    )
}