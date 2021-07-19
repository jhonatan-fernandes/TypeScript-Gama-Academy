//boolean

const contaPaga: boolean = false;

//Number

const idade: number = 23;
const avaliacao:  number = 4.5;

//String

const nome: string = 'Jhonatan Fernandes';

//Array

const idades : number[] = [23, 60, 28];
const idade2: Array<number> = [23, 60, 28];

//Tuple

let jogadores: [string, string, string];
jogadores = ['Jhonatan', 'Fulano', 'Ciclano'];

//Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Reprovado = '003'

}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
    //any

    const retornodaAPI: any[] = ['Jhonatan', 23, false];
    const retornodaAPI2: any = {
        //...
    };

    //Void

    function printarNaTela (msg: string) : void {
        console.log(msg);
    }

    //Num e Undefined

    const u: undefined = undefined;
    const n: null = null;

    //Object
    function criar (Object: object) {
        //.......
    }
    criar ({
        propriedade: 1
    })

    //criar('Jhonatan') //Da erro

    // Never 

    function loopInfinito (): never {
        while (true) { }
    }
    function erro(mensagem: string): never {
        throw new Error(mensagem);
    }

    function falha( ) {
        return erro('Algo falhou');
    }

    //Union Types

    function exibirNota(nota: number | string) {
        console.log(`A nota é ${nota}`); //poderia ser console.log('A nota é ' + nota)
    }
    exibirNota('10');
    exibirNota(10);


    //Alias

    type Funcionarios = Array<string> | number | boolean
    const funcionarios: Funcionarios = ['Jhonatan', 'Fulano', 'Ciclano'];

    function tratarFuncionarios(funcionarios: Funcionarios) {
        //......
    }

    //Nulo ou opcionalis

    let altura: number | null = 1.6;
    altura = null;

    type Contato = {
        nome: string;
        telefone1: string;
        telefone2?: string;
    }
    const contato: Contato = {
        nome: 'Jhonatan',
        telefone1: '123456',
        }

        //Assertion

        const minhaIdade: any = 23;
        (minhaIdade as number).toString( );
        (<number>minhaIdade).toString( )

        const input = document.getElementById("numero1") as HTMLInputElement;
        //const input =<HTMLInputElement> document.getElementById("numero1");
        console.log(input.value);


