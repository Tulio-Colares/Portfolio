import React, { Component } from "react";
import { ExternalLink } from 'react-external-link';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tindog from '../imagens/Tindog.png';
import pokemon from '../imagens/PokemonP.png';
import youtube from '../imagens/BuscaVideosP.png';
import blog from '../imagens/Blog2.png';
import lista from '../imagens/TodoListP.png';

export default class Portfolio extends Component {
  Alerta() {
    alert(
      "Este projeto está sendo concluído neste exato momento e logo estará disponível para visualização. Logo teremos mais novidades!");
  }

  render() {
    return (
      <div  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-once="true" id="portfolio">
        <h1>Portfólio</h1>
        <Carousel className="carousel">

          <Carousel.Item>
            <div className="cartao">
              <div className="title-img">
                <h3>TinDog</h3>
                <img src={tindog} alt="tindog-img"/>
              </div>
              <div className="texto">
                <p>Descubra qual o par perfeito para o seu cão com o Tindog! Inspirado no Tinder, este mockup 
                  usa diversos elementos de HTML, CSS e Bootstrap integrados ao React. </p>
                  <ExternalLink href="https://tincao.netlify.app/">
                    <button className="link-externo">Ver projeto</button>
                  </ExternalLink>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="cartao">
              <div className="title-img">
                <h3>Pokemon</h3>
                <img src={pokemon} alt="pokemon-img"/>
              </div>
              <div className="texto">
                <p>Projeto criado para demonstrar o uso do de APIs para coleta de diversos dados, fotos 
                e informações sobre diferentes pokemons, além de paginação e busca específica por um pokemon 
                que o usuário defina. Habilidades usadas: React, hooks, HTML, CSS. </p>
                  <ExternalLink href="https://pokemon-com-api.netlify.app/">
                    <button className="link-externo">Ver projeto</button>
                  </ExternalLink>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="cartao">
              <div className="title-img">
                <h3>Site de Pesquisa de Videos</h3>
                <img src={youtube} alt="youtube-img"/>
              </div>
              <div className="texto">
                <p>Projeto que usa uma API do youtube para buscar videos de diversos temas. Habilidades 
                usadas: React, hooks, HTML, CSS, semantic-ui</p>
                  <ExternalLink href="https://pesquisa-videos.netlify.app/">
                    <button className="link-externo">Ver projeto</button>
                  </ExternalLink>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="cartao">
              <div className="title-img">
                <h3>Blog</h3>
                <img src={blog} alt="blog-img"/>
              </div>
              <div className="texto">
                <p>Aplicativo full-stack simples, onde se criam novos textos que, uma vez postados, ficam salvos 
                num banco de dados que não se perde. Habilidades usadas: Javascript, HTML, CSS, Node, MongoDB</p>
                  <ExternalLink href="">
                    <button className="link-externo" onClick={this.Alerta}>Ver projeto</button>
                  </ExternalLink>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="cartao">
              <div className="title-img">
                <h3>Lista de Tarefas</h3>
                <img src={lista} alt="youtube-img"/>
              </div>
              <div className="texto">
                <p>Não perca nenhum dos seus afazeres! Este aplicativo Full-stack permite que novas tarefas sejam 
                  criadas, editadas e deletadas, bem como permite a criação de diversas listas para organizar tais 
                  tarefas de forma mais intuitiva. Habilidades usadas: Javascript, HTML, CSS, Node, MongoDB</p>
                  <ExternalLink href="">
                    <button className="link-externo" onClick={this.Alerta}>Ver projeto</button>
                  </ExternalLink>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}
