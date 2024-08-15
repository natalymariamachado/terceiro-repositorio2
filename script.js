const caixaPrincipal = document. querySelector(".caixa-principal");
const caixaPrincipal = document. querySelector(".caixa-perguntas");
const caixaPrincipal = document. querySelector(".caixa-alternativas");
const caixaPrincipal = document. querySelector(".caixa-resultado"); 
const caixaPrincipal = document. querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
    },
     {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
    
];

let atual =0;
let perguntaAtual;