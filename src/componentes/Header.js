import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  return (
    <div className="Header">
      <div className="header-container">
        <AnchorLink className="link" href='#frente' offset='100'>Home</AnchorLink>
        <AnchorLink className="link" href='#apresentacao' offset='100'>Sobre mim</AnchorLink>
        <AnchorLink className="link" href='#habilidades' offset='100'>Habilidades</AnchorLink>
        <AnchorLink className="link" href='#portfolio' offset='100'>Portfólio</AnchorLink>
        <AnchorLink className="link" href='#contato' offset='100'>Contato</AnchorLink>
      </div>
    </div>
  )
}
