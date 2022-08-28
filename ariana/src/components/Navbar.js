import React from 'react';
import {FullNavBar, NavLink, NavLeft, NavRight } from './styles.js'

const links = [
    { href: '/about',
      text: 'About Me'
  },
  { href: '/portfolio',
  text: 'Portfolio'
  },
  { href: '/contact',
  text: 'Contact Me'
  }
  ];

 const Navbar = () => {

    return (
        <FullNavBar>
            <NavLeft>
                <NavLink  href={"/"}>Ariana Hernandez</NavLink>
               </NavLeft>
               <NavRight>
            {links.map((link,key) => (
                <NavLink key={key} href={link.href}>{link.text}</NavLink> 
            ))}
            </NavRight>
        </FullNavBar>
    );
};

export default Navbar;
  