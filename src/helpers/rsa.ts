export type Mensagem = {
    title: string;
    color: string;
    icon: 'fechado' | 'aberto';
    mensagem?: string;
    criptografada?: any;
}



export const mensagems: Mensagem[] = [
    { title:'Criptografado', color: '#C3423F', icon: 'fechado' },
    { title: 'Descriptografado', color: '#0EAD69', icon: 'aberto' },
];


export const criptografarMenssagem = (mensagem: string) => {
    let mensagemsCopy: Mensagem = {...mensagems[0]};

    mensagemsCopy.criptografada = mensagem;
    return mensagemsCopy;


}

export const descriptografarMenssagem = (mensagem: string) => {
    let mensagemsCopy: Mensagem  = {...mensagems[1]};

    mensagemsCopy.mensagem = mensagem;
    return mensagemsCopy;
}
