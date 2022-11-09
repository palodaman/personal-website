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
                    <p>I am a budding Software Engineer and therefore most of my projects pertain to web development. I like to get to exposure to varioustinker with my projects and implement them again using different libraries and frameworks. </p>
                    <p>Recently I got exposed to the utility of APIs in our everyday apps and I was blown away with the idea. I think it's a really cool way to build reactive apps with the magic of APIs and I have tried to incorporate the same in my latest project.</p>
                    <p> I am looking forward to work more with graphQL APIs and the MERN stack</p>
                </div>  
            </section>

        {/* sections for the projects listing */}
            <section className="projects-listing">
            <Box sx={{ width: '100%' }}>
            <Grid disableEqualOverflow className="parent-grid" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              
                <Grid item xs={6} className="proj-item">
                  <Item>
                  <div className="proj-div" style={{display:'inline'}}>
                        <h3 className="proj-name"> React Graph QL query</h3>
                    </div>
                    <ul>
                        <li> This project was an attempt at using and learning the graph QL Api  and React</li>
                        <li> GraphQL gives you a clean way to query complex server data efficiently from GitHub API using GraphiQL</li>
                             {/* Making use of the github API, the interface allows you to pull information of github users such as their repositories and whatever else </li> */}
                        <li> Some of the styling was handled using the powerful Bootstrap library</li>
                    </ul>
                    </Item>  
                </Grid>
                
                <Grid item xs={6} className="proj-item" alignItems="left">
                    <Item>
                    <div className="proj-div">
                        <h3 className="proj-name"> React's Hangaroo game</h3>
                    </div>
                    <ul>
                        <li> This project was an attempt at using and learning the graph QL Api  </li>
                        <li> Making use of the github API, the interface allows you to pull information of github users such as their repositories and whatever else </li>
                        <li> Some of the styling was handled using the powerful Bootstrap library</li>
                    </ul>
                    </Item>
                   
                </Grid>

                <Grid item xs={6} className="proj-item">
                  <Item>
                  <div className="proj-div">
                        <h3 className="proj-name"> React's Hangaroo game</h3>
                    </div>
                    <ul>
                        <li> This project was an attempt at using and learning the graph QL Api  </li>
                        <li> Making use of the github API, the interface allows you to pull information of github users such as their repositories and whatever else </li>
                        <li> Some of the styling was handled using the powerful Bootstrap library</li>
                    </ul>
                  </Item>
                </Grid>

                <Grid item xs={6} className="proj-item">
                  <Item>
                  <div className="proj-div">
                        <h3 className="proj-name"> Autonomous Sanitizing Robot</h3>
                    </div>
                    <ul>
                        <li>Designed and coded a self autonomous robot in engineering design class which move based on its sensing of white and black squares on a 15 by 15 sheet.  </li>
                        <li>Brainstormed the running algorithm for two axes with two team members resulting in a nice team building activity </li>

                    </ul>
                    </Item>  
                </Grid>
        
            </Grid>
            </Box>
        
            </section>
        
           

        
        </div>
    )
}