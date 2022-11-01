import { Mensagem } from "../../helpers/rsa";
import abertoImage from '../../assets/aberto.png';
import fechadoImage from '../../assets/fechado.png';

import styles from './GridItem.module.css'


type Props = {
    item: Mensagem;
};

export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'aberto' ? abertoImage : fechadoImage} alt="" width={50}/>
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.criptografada && 
               <div className={styles.criptografada}>{item.criptografada}</div>
            }
            {item.mensagem &&
                <div className={styles.menssagem}>{item.mensagem}</div>
            }
        </div>
    );
}