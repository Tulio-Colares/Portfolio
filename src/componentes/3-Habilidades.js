import React, { Component } from "react";

export default class Habilidades extends Component {
  render() {
    return (
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-once="true" id="habilidades" >
        <div className="skills">
          <h1>Minhas Habilidades</h1>
          <div className="skill-row">
            <div className="symbol css3">
              <img
                className="foto-css3"
                alt="css3-symbol"
                src="./images/CSS3_icon.png"
              />
              <h2>CSS3</h2>
            </div>

            <div className="symbol html5">
              <img
                className="foto html5"
                alt="html5-symbol"
                src="./images/html5_icon.png"
              />
              <h2>HTML5</h2>
            </div>

            <div className="symbol react">
              <img
                className="foto react"
                alt="react-symbol"
                src="./images/react_icon.png"
              />
              <h2>React</h2>
            </div>

            <div className="symbol node">
              <img
                className="foto node"
                alt="node-symbol"
                src="./images/nodejs_icon.png"
              />
              <h2>Node.js</h2>
            </div>

            <div className="symbol github">
            <img
                className="foto github"
                alt="node-symbol"
                src="./images/github_icon.png"
              />
              <h2>Github</h2>
            </div>

            <h3>
              HTML, CSS, Javascript, React, Bootstrap, jQuerry, Node, Express,
              Git, GitHub, SQL, MongoDB, Mongoose
            </h3>
          </div>

          <div className="skill-row">
            <h3>Outras Habilidades</h3>
            <p>
              Minha primeira formação foi em Engenharia de Produção Mecânica pela 
              Universidade Federal do Ceará (UFC), e atuei na área como consultor de gestão empresarial.
              Neste período, participei de vários projetos que ajudaram as empresas a se desenvolverem tanto financeiramente 
              quanto a qualidade de seus produtos e serviços prestados.
              Durante esta etapa desenvolvi uma visão estratégica dos negócios, aprendendo uma nova 
              metodologia de agregação de valor, bem como o mapeamento de processos com programas 
              específicos (como Bizagi e Visio), tendo sido esta a porta de entrada para a descoberta da minha paixão pela área de TI.
            </p>
            <p>
            Apaixonado por línguas, falo, escrevo e compreendo Inglês fluentemente, além de ter boa compreensão em 
            Alemão e em Dinamarquês. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
