import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Apresentação() {
  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-once="true" id="apresentacao">
      <div className="titulo">
        <h2>Sobre mim</h2>  
      </div>
      <div className="mostrador">
        <div className="titulo-img">
          <img src="./images/Foto pessoalP.jpg" alt="Foto-pessoal"/>
        </div>
        <div className="texto">
          <p>O meu nome é Túlio Colares. Sou um programador e desenvolvedor web 
            Front end. Formado originalmente em engenharia, foi através desta 
            que eu descobri minha paixão pela programação. Apesar de me considerar 
            um desenvolvedor front end, me especializando em React, já realizei alguns
            projetos sendo responsável pela parte do back end também. Dê uma olhada no 
            meu Portfólio! 😉</p>
        </div>
      </div>
    </div>
  )
}
