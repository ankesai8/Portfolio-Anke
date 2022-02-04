import React from 'react';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import nosql from '../assets/nosql-icon-21.png';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import mongodb from '../assets/mongodb.svg';
import react from '../assets/react.svg';
import netlify from '../assets/netlify-logo.png';
import heroku from '../assets/heroku.png';
import vscode from '../assets/vscode.svg';
import vercel from '../assets/vercel.png';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SkillsSection = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <>
            <DivWrapper 
                id="skills" 
                >
                <Text>Technologies & Tools</Text>
                    <Icons data-aos="zoom-in">
                        <img src={html} alt="html" title='html'/>
                        <img src={css} alt="css" title='css'/>
                        <img src={bootstrap} alt="bootstrap" title='bootstrap'/>
                        <img src={js} alt="javascript" title='javascript'/>
                        <img src={react} alt="styledc" title='react' />
                        <img src={nosql} alt="nosql" title='nosql'/>
                        <img src={mongodb}  alt="mongodb" title='mongodb' />
                        <img src={git} alt="git" title='git'/>
                        <img src={github} alt="github" title='github'/>
                        <img src={vscode} alt="vscode" title='vs code'/>
                        <img src={netlify} alt="netlify" title='netlify'/>
                        <img src={heroku} alt="heroku" title='heroku'/>
                        <img src={vercel} alt="vercel" title='vercel'/>
                     
                    </Icons>
        </DivWrapper>
        </>
    );
};

const DivWrapper = styled.div `
    min-height: 90vh;
    margin-left: 15vh; 
    margin-right: 15vh;
    margin-top: 10rem;
    text-align: center;
@media (max-width: 768px){
    margin: 8rem 5rem 5rem 5rem;
    }  
@media (max-width: 480px){
    margin-left: 5vh; 
    margin-right: 3vh;
    margin-top: 28rem;
    }  
`
const Text = styled.h2`
    margin-bottom: 15vh; 
    /* font-size: 5rem; */
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
@media (max-width: 768px){
    margin-top: 1rem;  
    margin-bottom: 10vh; 
    }
@media (max-width: 480px){
    margin-top: 2vh;
    margin-bottom: 7vh;
    font-size: 3.5rem;
    } 
`

const Icons = styled.div`
    height: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1em; 
    row-gap: 3rem;
    justify-items: center;
    align-items: center;
    img {
        margin-top: 1vh;
        width: 5vw;
    }
        
@media (max-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 4rem;
    img  {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    } 
    .white-circle {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    }
}
@media (max-width: 480px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 1rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    } 
    .white-circle {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    }
}
`
export default SkillsSection;
