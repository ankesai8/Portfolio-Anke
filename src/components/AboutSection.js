import React from 'react';

import styled from 'styled-components';
import Curly from './Curly' 

import Resume from './Resume'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <StyledAbout>
                    <div className = "description" id="about" >
                        <div className = "title">
                        <BigText >
                        <HI data-aos="fade-right">Hi There!</HI>
                            <h2 data-aos="fade-right" data-aos-delay="100">I'M <StyledA data-aos="fade-right" data-aos-delay="100">Anke SaiPrasad</StyledA>
                            </h2>
                        </BigText>
                
                     <h2 data-aos="fade-right" data-aos-delay="100"><span>Full-Stack Web Developer.</span></h2>
                      
                    </div>
                        <P data-aos="fade-up" >I'm very captivated by everything that has to do with front-end and also very fascinated by how things work behind the scenes in the back-end
                        </P>
                    <Resume />
                    
                </div>
               
                
            </StyledAbout>
            <Curly/>
            
        </>
    );
};

const StyledAbout = styled.div`
    height: 100vh;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 8rem;
    color: whitesmoke;
    margin-bottom: 2vh;
    
@media (max-width: 768px) {
    height: 45vh;
    display: block;
    text-align: center; 
    padding: 3rem;
    margin-top: 11rem;
    
    }
    
    
@media (max-width: 480px){
    padding: 1rem;
    text-align: center;
    margin-top: 9rem;
    
    } 
`
const HI = styled.h2 `
    font-weight: 900;
    font-size: 3.5rem;
    color: #3DC9A7; 
    font-family: 'Lato', sans-serif;
`
const P = styled.p`
    margin: 2.2rem 2rem 1rem 0rem;
    font-weight: 300;
    padding-right: 8rem;
    font-family: 'Montserrat', sans-serif;

@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`
const StyledA = styled.a `
    color: #3DC9A7;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
`

const BigText = styled.div `
    /* overflow: hidden; */
    text-shadow: 0 15px 7px #081730; 
`
export default AboutSection;

