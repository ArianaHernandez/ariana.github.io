import React from 'react';
import { GalleryRow } from './styles.js';
import TinyTurtle from '../images/TT.png'
import VendingMachine from '../images/vm.png'
import Mario from '../images/mario.png'
import PB from '../images/PbLogo.png'
import RPS from '../images/rpslogo.png'
import JL from '../images/justice.png'
import Disney from '../images/Disney.png'
import ChooseYO from '../images/chooseYourOwn.png'
import Giphy from '../images/giphy.png'
import WW from '../images/wks.png'

  
const Portfolio = () => {
  return (
    <body>
        <h1>Projects</h1>
        <h2>2019-2020</h2>
        <GalleryRow>
        <a href="https://www.workspacewilliamsburg.com/"><img src={WW} alt="Workspace Williamsburg"/></a>
        </GalleryRow>
        <h2>2018-2019</h2>
        <GalleryRow>
       <a href="https://arianahernandez.github.io/fanpage/"><img src={PB} alt="Peanut Butter Gallery Screenshot"/></a>
       <a href="https://arianahernandez.github.io/rockpaperscissors/"><img src={RPS} alt="Rock,Paper,Scissors Screenshot"/></a>
       <a href="https://arianahernandez.github.io/quiz/"><img src={JL} alt="Justice League Screenshot" /></a>
       <a href="https://arianahernandez.github.io/playlist/"><img src={Disney} alt="Disney Screenshot"/></a>
       <a href="https://arianahernandez.github.io/ChooseYourOwnAdventure/"><img src={ChooseYO} alt="Choose your own adventure screenshot"/></a>
       <a href="https://arianahernandez.github.io/giphy/"><img src={Giphy} alt="giphy screenshot"/></a>
       </GalleryRow>
       <h2>2017-2018 </h2> 
       <GalleryRow>
        <a href="https://popcode.org/?snapshot=777642d9-ac6a-4a92-9ff1-acfab58af254"><img src={TinyTurtle} alt="Tiny Turtle Screenshot"/></a>
        <a href="https://popcode.org/?snapshot=e85f1494-8595-41ff-9757-e463fda4a876"><img src={VendingMachine} alt="Vending Machine Screenshot"/></a>
        <a href="https://popcode.org/?snapshot=6ace34e0-495e-4f71-b735-c15c4392ba54"><img src={Mario} alt="Mario Screenshot"/></a>
        <h2>Group Projects</h2>
         <h3>2018</h3>
         <a href="https://the-humans.glitch.me/">Dare Explore Defy: The Odyssey</a>
         <h3>2019</h3>
         <a href="https://mamadousamba.github.io/hack_impact/">Hack the Impact: Everyday Superheros</a>
         </GalleryRow>
    </body>
  );
};
  
export default Portfolio;