import React from 'react';
import Header from "./componentes/Header";
import Frente from "./componentes/1-Frente";
import Apresentação from "./componentes/2-Apresentação";
import Habilidades from "./componentes/3-Habilidades";
import Portfolio from "./componentes/4-Portfolio";
import Contatos from "./componentes/5-Contatos";
import Footer from './componentes/Footer';

export default function App() {
  return (
    <div className="corpo">
      <Header />
      <Frente />
      <hr className="separador" />
      <Apresentação />
      <hr className="separador"/>
      <Habilidades />
      <hr className="separador"/>
      <Portfolio />
      <hr className="separador"/>
      <Contatos />
      <Footer />
    </div>
  )
}




