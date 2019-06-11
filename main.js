//Grava nas variaveis os valores dos acertos das questoes, caso não tenha respondido ele salva o valor como 0;
var Porcentagem1 = parseFloat(localStorage.getItem("Porcentagem1") || "0");
var Porcentagem2 = parseFloat(localStorage.getItem("Porcentagem2") || "0");
var Cilindro = parseFloat(localStorage.getItem("Cilindro") || "0");
var Cone = parseFloat(localStorage.getItem("Cone") || "0");
var Esfera = parseFloat(localStorage.getItem("Esfera") || "0");
var FQ = parseFloat(localStorage.getItem("FQ") || "0");
var Multiplos = parseFloat(localStorage.getItem("Multiplos") || "0");
var OP1 = parseFloat(localStorage.getItem("OP1") || "0");
var piramide = parseFloat(localStorage.getItem("piramide") || "0");
var Potencia1 = parseFloat(localStorage.getItem("Potencia1") || "0");
var Potencia2 = parseFloat(localStorage.getItem("Potencia2") || "0");
var RG1 = parseFloat(localStorage.getItem("RG1") || "0");
var Semelhancas = parseFloat(localStorage.getItem("Semelhancas") || "0");
var sg = parseFloat(localStorage.getItem("sg") || "0");
var fa = parseFloat(localStorage.getItem("fa") || "0");
var fl = parseFloat(localStorage.getItem("fl") || "0");
var razaog = parseFloat(localStorage.getItem("razaog") || "0");
var medias = parseFloat(localStorage.getItem("medias") || "0");
var s2 = parseFloat(localStorage.getItem("s2") || "0");
var est = parseFloat(localStorage.getItem("est") || "0");
var pri = parseFloat(localStorage.getItem("pri") || "0");
var radi = parseFloat(localStorage.getItem("radi") || "0");
var pn = parseFloat(localStorage.getItem("pn") || "0");
//Mostra nos elementos a porcentagem de acertos
document.getElementById("Porcentagem1").innerHTML = Porcentagem1 + "%";
document.getElementById("Porcentagem2").innerHTML = Porcentagem2 + "%";
document.getElementById("Cilindro").innerHTML = Cilindro + "%";
document.getElementById("Cone").innerHTML = Cone + "%";
document.getElementById("Esfera").innerHTML = Esfera + "%";
document.getElementById("FQ").innerHTML = FQ + "%";
document.getElementById("Multiplos").innerHTML = Multiplos + "%";
document.getElementById("OP1").innerHTML = OP1 + "%";
document.getElementById("piramide").innerHTML = piramide + "%";
document.getElementById("Potencia1").innerHTML = Potencia1 + "%";
document.getElementById("Potencia2").innerHTML = Potencia2 + "%";
document.getElementById("RG1").innerHTML = RG1 + "%";
document.getElementById("Semelhancas").innerHTML = Semelhancas + "%";
document.getElementById("sg").innerHTML = sg + "%";
document.getElementById("fa").innerHTML = fa + "%";
document.getElementById("fl").innerHTML = fl + "%";
document.getElementById("razaog").innerHTML = razaog + "%";
document.getElementById("est").innerHTML = est + "%";
document.getElementById("s2").innerHTML = s2 + "%";
document.getElementById("medias").innerHTML = medias + "%";
document.getElementById("pri").innerHTML = pri + "%";
document.getElementById("radi").innerHTML = radi + "%";
document.getElementById("pn").innerHTML = pn + "%";

//funcao pra gerar graficos
window.onload = function() {
    var options = {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Meu desempenho"
        },
        axisX: {
            labelAutoFit: true,
            title: "Areas da matematica"
        },
        axisY: {
            maximum: 100,
        },
        data: [{
            // Adicionar as colunas dos temas de matematica
            type: "column",

            dataPoints: [
                { label: "Porcentagem1", y: Porcentagem1 },
                { label: "Porcentagem2", y: Porcentagem2 },
                { label: "Cilindro", y: Cilindro },
                { label: "Cone", y: Cone },
                { label: "Esfera", y: Esfera },
                { label: "Funções Quadráticas", y: FQ },
                { label: "Multiplos", y: Multiplos },
                { label: "Operações básicas", y: OP1 },
                { label: "piramide", y: piramide },
                { label: "Potencia1", y: Potencia1 },
                { label: "Potencia2", y: Potencia2 },
                { label: "Radical Geral", y: RG1 },
                { label: "Semelhancas", y: Semelhancas },
                { label: "Segmentos Proporcionais", y: sg },
                { label: "Função Afim", y: fa },
                { label: "Função Logarítmicas", y: fl },
                { label: "Razão Geral", y: razaog },
                { label: "Semelhanças", y: s2 },
                { label: "Média", y: medias },
                { label: "Estatística", y: est },
                { label: "Prisma", y: pri },
                { label: "Radiciação", y: radi },
                { label: "Pontos Notaveis", y: pn }
            ]
        }]
    };

    $("#chartContainer").CanvasJSChart(options);
}