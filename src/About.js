import React from 'react';
import { Grid, Typography, Divider, Stack, Fade, Button, CardContent } from '@mui/material';
import {
  Person,
  Info,
  RocketLaunch,
  Build,
  Work,
  FolderOpen,
} from '@mui/icons-material';
import Resume from './RishitGupta_Resume(2024).pdf'; // Ensure this path is correct

const AboutMe = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #1a1a1a, #000000)',
      padding: '4rem',
      minHeight: '100vh',
    }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        style={{
          marginBottom: '3rem',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
      >
        About Me
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side: Main Info */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={1000}>
            <div style={{
              padding: '2rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Person sx={{ color: '#00aaff' }} />
                <Typography variant="h4" color="text.primary" fontWeight="bold" sx={{ fontSize: '1.8rem' }}>
                  About Me
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '1rem', fontSize: '1.2rem' }}>
                I am a passionate aerospace student currently at Amador Valley High School. 
                I plan on pursing a Masters Degree in Aerospace Engineering. 
                My goal is to make a meaningful impact in society through innovative solutions 
              </Typography>
            </div>
          </Fade>
        </Grid>

        {/* Right Side: Hobbies */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={1200}>
            <div style={{
              padding: '2rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Info sx={{ color: '#00aaff' }} />
                <Typography variant="h4" color="text.primary" fontWeight="bold" sx={{ fontSize: '1.8rem' }}>
                  Hobbies
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '1rem', fontSize: '1.2rem' }}>
                • Aviation
                <br />
                • Watching TV Shows
                <br />
                • Traveling
                <br />
                • Web Development 
                <br />
                • Swimming
                <br />
                • Flight Simulator
          
              </Typography>
            </div>
          </Fade>
        </Grid>
      </Grid>

      {/* Additional Info Section */}
      <Divider sx={{ my: 4, backgroundColor: '#ffffff' }} />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Fade in timeout={1400}>
            <div style={{
              padding: '2rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <RocketLaunch sx={{ color: '#00aaff' }} />
                <Typography variant="h4" color="text.primary" fontWeight="bold" sx={{ fontSize: '1.8rem' }}>
                  Why I Chose Aerospace
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '1rem', fontSize: '1.2rem' }}>
                My love for nature and traveling exploring the unique wonders around the world, has deepend my appreciation for the 
                exhilarating beauty of the world. However with each travel I noticed that aerospace industry contrivutes significantly to carbon
                emissions, impacting the wonders of the world. This propels me to innovate sustainable propulsion systems, designs for the aerospace industry,
                driving my passion to protect our planet for future generations. Aerospace Engineers mainly create and design aircraft systems such as the body, wings or engines (propulsion). 
                <br/>
                Additionally, I have a fascination with planes and enjoy watching them as they soar the skies. Admiring the design, espically the engines that power them. 
                <br/>
                One of my experiences in this was researching about leveraging nuclear fission to power our aircrafts in the future. More about this can be found in the projects section. 
              </Typography>
            </div>
          </Fade>
        </Grid>
      </Grid>

      {/* Skills Section */}
      <Divider sx={{ my: 4, backgroundColor: '#ffffff' }} />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Fade in timeout={1600}>
            <div style={{
              padding: '2rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Build sx={{ color: '#00aaff' }} />
                <Typography variant="h4" color="text.primary" fontWeight="bold" sx={{ fontSize: '1.8rem' }}>
                  Skills
                </Typography>
              </Stack>
              <Grid container spacing={2} sx={{ paddingTop: '1rem' }}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                    • CAD Software (OnShape, Fusion)
                    <br />
                    <br />
                    • Programming: (Python, Javascript, Java, HTML, CSS, SQL)
                    <br />
                    <br />
                    • Teamwork
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                    • Project Management
                    <br />
                    <br />
                    • Full Stack Developer
                    <br />
                    <br />
                    • Team Collaboration
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                    • Machine Learning
                    <br />
                    <br />
                    • OpenMC
                    <br />
                    <br />
                    • Leadership
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Grid>
      </Grid>

      {/* Resume Section */}
      <Divider sx={{ my: 4, backgroundColor: '#ffffff' }} />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Fade in timeout={1800}>
            <div style={{
              padding: '2rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Work sx={{ color: '#00aaff' }} />
                <Typography variant="h4" color="text.primary" fontWeight="bold" sx={{ fontSize: '1.8rem' }}>
                  Resume
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ paddingTop: '1rem', fontSize: '1.2rem' }}>
                Click the button below to view my resume:
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FolderOpen />}
                  href={Resume}
                  target="_blank"
                  sx={{ marginTop: '1.5rem' }}
                >
                  View My Resume
                </Button>
              </Stack>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;