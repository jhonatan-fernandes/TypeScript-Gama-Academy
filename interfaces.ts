interface  Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser():  Usuario {
    return {
        nome: 'Jhonatan',
        email: 'jhonatan@jhonatan.com'
    }
}

function setUser (Usuario: Usuario ) {
    //......
}