import React, { useState } from 'react';
import {db} from './firebase.js';

export default function Contatos() {
  const [ nome, setNome] = useState("");
  const [ email, setEmail] = useState("");
  const [ mensagem, setMensagem] = useState("");

  const [loader, setLoader] = useState(false);

  const FuncNome = (e) => {
    setNome(e.target.value);
    console.log(nome)
  }

  const FuncEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  }

  const FuncMensagem = (e) => {
    setMensagem(e.target.value);
    console.log(mensagem)
  }

  const FuncEnviar = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Contatos").add({
      nome: nome,
      email: email,
      mensagem: mensagem
    }).then(() => {
      alert("Mensagem enviada! 👍");
      setLoader(false);
    }).catch(error => {
      alert(error.message);
      setLoader(false);
    });

    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-once="true" id="contato">
        <div className="contate-me">
          <h2>Entre em contato!</h2>
          <p>Você está em busca de um excelente profissional para trabalhar no seu projeto. 
            Eu estou sempre em busca de novos desafios. </p>
          <h3>Então vamos trabalhar juntos!</h3>
         
          <form  onSubmit={FuncEnviar}>
            <span><input type="text" placeholder="Nome:" value={nome} onChange={FuncNome}></input></span>
            <span><input type="text" placeholder="E-mail p/ contato:" value={email} onChange={FuncEmail}></input></span>
            <span><textarea cols="40" rows="12" placeholder="Sua Mensagem:" value={mensagem} onChange={FuncMensagem}></textarea></span>
            <span><button type="submit" style={{ background : loader ? "#ccc" :"rgb(52, 167, 196)" }} >Enviar</button></span>
          </form>
        </div>
        
      </div>
  )
}
