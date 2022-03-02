// <!--Exercícios: promises e async / await-- >
//   <!--1. Utilizando o enunciado e código do exercício "as rosas não falam",
//  presentes no bloco de exercícios anterior, você deve implementar a mesma 
//  solução, porém utilizando promises e funções async /await (**os dois formatos**). 
//  ** Dica **: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts promisificados. 
//  Uma possível implementação de timeout em modo promise é: --> -->
const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
// const P = new Promise<void>((resolve, reject) => {
// })
// P.then(() =>{
// console.log("promessa concluída")
// }).catch(() =>{
//   console.log("Não cumpri a promessa")
// })
const desafio1asRosasNaoFalam = async () => {
    const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = () => {
        return new Promise((resolve, reject) => {
            timeout(geraIntervaloAleatório()).then(() => {
                console.log('Queixo-me às rosas');
                resolve();
            }).catch(() => {
                reject();
            });
        });
    };
    const masQueBobagem = () => {
        return new Promise((resolve, reject) => {
            timeout(geraIntervaloAleatório()).then(() => {
                console.log('Mas que bobagem');
                resolve();
            }).catch(() => {
                reject();
            });
        });
    };
    const asRosasNaoFalam = () => {
        return new Promise((resolve, reject) => {
            timeout(geraIntervaloAleatório()).then(() => {
                console.log('As rosas não falam');
                resolve();
            }).catch(() => {
                reject();
            });
        });
    };
    const simplesmenteAsRosasExalam = () => {
        return new Promise((resolve, reject) => {
            timeout(geraIntervaloAleatório()).then(() => {
                console.log('Simplesmente as rosas exalam');
                resolve();
            }).catch(() => {
                reject();
            });
        });
    };
    const oPerfumeQueRoubamDeTi = () => {
        return new Promise((resolve, reject) => {
            timeout(geraIntervaloAleatório()).then(() => {
                console.log('O perfume que roubam de ti, ai');
                resolve();
            }).catch(() => {
                reject();
            });
        });
    };
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    await queixoMeAsRosas();
    await masQueBobagem();
    await asRosasNaoFalam();
    await simplesmenteAsRosasExalam();
    await oPerfumeQueRoubamDeTi();
};
desafio1asRosasNaoFalam();
//# sourceMappingURL=exercicio-04-promises.js.map