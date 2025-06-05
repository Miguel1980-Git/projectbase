/*let salario = Number(prompt("Digite seu salario:"))
let mestrado = Number(prompt("Digite quantos meses voce trabalhou:"))
let decimo = salario/12*mestrado
alert("Seu décimo é: R$" + decimo)*/
/*let salario = Number(prompt("Digite seu salario"))
if (salario < 1000) {
    salario = (15 / 100 * salario) + salario
    alert("Seu salario é:" + salario)
}
else if (salario>= 500 && salario<=1000) {
    (10 / 100 * salario) + salario
    alert("Seu salario é:" + salario)
}
else {
    salario = (5 / 100 * salario) + salario
    alert("Seu salario é:" + salario)
}*/
let valordobasico = 25;
let valordopremium = 40;
let valordoultra = 60;
let tresa4 = 5;
let maisque4 = 7.50;
let tipodeassinatura = prompt("Digite o nome da assinatura que você deseja: ");
let quantitelas = prompt("Digite a quantas telas você terá: ");
if (tipodeassinatura == "básico") {
    if (quantitelas >= 3 && quantitelas <= 4) {
        alert("O seu plano será R$ " + (valordobasico + tresa4));
    } else if (quantitelas >= 4) {
        alert("O seu plano será R$ " + (valordobasico + maisque4));
    } else {
        alert("O seu plano será R$ " + valordobasico);
    }
} else if (tipodeassinatura == "premium") {
    if (quantitelas >= 3 && quantitelas <= 4) {
        alert("O seu plano será R$ " + (valordopremium + tresa4));
    } else if (quantitelas >= 4) {
        alert("O seu plano será R$ " + (valordopremium + maisque4));
    } else {
        alert("O seu plano será R$ " + valordopremium);
    }
}
else if (quantitelas >= 3 && quantitelas <= 4) {
    alert("O seu plano será R$ " + (valordoultra + tresa4));
} else if (quantitelas >= 4) {
    alert("O seu plano será R$ " + (valordoultra + maisque4));
} else {
    alert("O seu plano será R$ " + valordoultra);
}
