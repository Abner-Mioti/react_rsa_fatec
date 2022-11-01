import React, { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered1.png';
import { GridItem } from './components/GridItem';
import {mensagems, criptografarMenssagem, descriptografarMenssagem, Mensagem } from './helpers/rsa';
import leftArrowImage from './assets/leftarrow.png';

const App = () =>{
  
  const [mensagem, setMensagem] =  useState<string>('');
  const [criptografada, setCriptografada] = useState<string>('');
  const [toShowCrip, setToShowCrip] = useState<Mensagem | null>(null);


  const InputCrip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMensagem(event.target.value);
  }

  const InputDescrp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCriptografada(event.target.value);
  }

  const criptografarButton = () => {
    setToShowCrip(criptografarMenssagem(mensagem));

  }

  const descriptografarButton = () => {
    setToShowCrip(descriptografarMenssagem(criptografada));
  }

  const backButton = () => {
    setToShowCrip(null);
    setMensagem('');
    setCriptografada('');
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={80} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Criptografia</h1>
          <p>RSA é um dos primeiros sistemas de criptografia de chave pública e é amplamente utilizado para transmissão segura de dados.</p>
          <input 
          type="text"
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={InputCrip}
          disabled={toShowCrip ? true : false }
          />
          <button onClick={criptografarButton} disabled={toShowCrip ? true : false}>Criptografar</button>
          <input 
          type="text"
          placeholder="Digite sua mensagem criptografada"
          value={criptografada}
          onChange={InputDescrp}
          disabled={toShowCrip ? true : false}
          />
          <button onClick={descriptografarButton} disabled={toShowCrip ? true : false}>Descriptografar</button>
        </div>
        <div className={styles.rightSide}>
          { !toShowCrip &&
          <div className={styles.grid}>
            {mensagems.map((item, key)=>(
              <GridItem key = {key} item = {item} />
            ))}
          </div>
          }
          {
            toShowCrip &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={backButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShowCrip}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;