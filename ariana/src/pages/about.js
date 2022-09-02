import React from 'react'
import Knitting from '../images/KnittingPhoto.jpg'
import Poetry from '../images/ArianaJoshuaLisa.jpg'
import Cognizant from '../images/Cognizant.jpeg'
import { AboutPage, AboutContent,AboutLeft, AboutRight, ImageSlide,Paragraph,Caption } from "./styles";

const images = [
    {
        src: Cognizant,
        alt:"Ariana with Cognizant Worker",
        text:"At a Codenation Event at a company called Cognizant, I showed one the employees my favorite project"
    },
    {
        src: Knitting,
        alt: "Ariana Knitting",
        text:"A picture of me in highschool, where you'd never see me without my loom!"
    }, 
    {
        src: Poetry,
        alt:"Ariana, Joshua Bennet, Elisa New at Poetry Discussion",
        text:"I performed one of my poems at Lincoln Center than sat down with famed Poet Joshua Bennet and Harvard Professor Elisa New to discuss poetry"
    },
]
  
const About = () => {
  return (
<AboutPage>
  <h1> About Me </h1>
  <AboutContent>
      <AboutLeft>
      <Paragraph>
      I have been programming since freshman year of high school. I wish I could say, it was love at first sight but it took a bit of time before I realized this is what I want to do with the rest of my life. 
      </Paragraph>
      <Paragraph>
      Building a website is an incredible feeling, and having it go live for the world to see is even better. In those moments after publishing my first website for an internship, I felt pride that I have never experienced before. 

      </Paragraph>
      <Paragraph>
      I consider myself a creator. Outside of programming, I knit, write, and edit videos. Whenever I have free time, chances are I will use it to create something. 
      </Paragraph>
      <Paragraph>“Put something silly in the world That ain't been there before.” Shel Silverstein</Paragraph>
       </AboutLeft>
       <AboutRight>
      {images.map((image,key) => (
                <ImageSlide key={key}><img style={{maxHeight:"300px"}} src={image.src} alt={image.alt}/>
                <Caption>{image.text}</Caption>
                </ImageSlide>
            ))}
  </AboutRight>
  </AboutContent>  </AboutPage>
  );
};
  
export default About;