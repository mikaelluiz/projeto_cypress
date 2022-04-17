Para executar o projeto é necessario ter o node e npm instalados.
Caso nao tenha, podera baixa-los juntos facilmente em https://nodejs.org/en/

Passos para Execução:

Com o terminal aberto de os seguintes comandos:

    npm i e depois npm run cypress:open

    Ira abrir uma tela do cypress com os testes criados;

    Selecione o testes que deseja executar ;

Para rodar os testes no terminal:

    npm run cypress:run


Separação das pastas:
    Fixtures: Carregue um conjunto fixo de dados localizado em um arquivo.
    (Imagens, audios, json e outros...)

    Integration: Normalmente os arquivos de testes ficam na pasta integration.
    Dentro da pasta integration contem outras pastas usadas para fazer os testes.
        
        Payloads: fica o corpo das nossas requisições, a maioria das vezes em formato
        json. Sintaxe: {"chave":"valor"} se o valor for number ou boolean não tem as "";
        
        Requests: fica a estrutura das nossas requisições. Nas requisições iremos criar
        uma função aonde podemos passar parametros se precisar, iremos retornar o resultado
        da nossa requisição, e para fazer ela precisamos passar o method, url, headers e body
        (se precisar), ailOnStatusCode para quando falhar um teste continuar rodando os
        outros testes e por fim exportar essa função. 

        Tests: fica a validação dos nossos testes. Nos testes iremos importar as nossas 
        requisições, adicionar o describe para dar o contexto dos nossos testes, e o
        it para criar o teste. Utilizamos o should para fazer asserção e o expect
        para confirmar se a resposta é realmente o que esperavamos. Podemos validar o
        status code, body e outras coisas de acordo com a documentação. 
    
    Plugins: Os plug-ins fornecem uma maneira de oferecer suporte e estender o comportamento 
    do Cypress

    Support: O arquivo de suporte é um ótimo lugar para colocar comportamentos reutilizáveis, 
    como comandos personalizados ou substituições globais. 
        Commands:  é carregado antes que qualquer arquivo de teste seja avaliado por meio de uma 
        instrução de importação. 

Tem os arquivos:
    cypress.json: Este arquivo JSON é usado para armazenar quaisquer valores de 
    configuração que você fornecer, um dos mais usados é baseUrl. 

    package.json: Dados do projeto, scripts pode colocar formas diferentes de rodar
    os testes com cypress e outras funcionalidades e também tem as dependencias que 
    fica todas ferramentas que está utilizando nos testes.
