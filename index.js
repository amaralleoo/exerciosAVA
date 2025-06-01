function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}

function pesquisaSatisfacao(){
    let nota = 0
    let soma = 0
    let conta = 1
    let contN = 0
    let contS = 0
    let contI = 0


    nota = 0
    while(conta < 10){
       nota = Number(prompt(`Informe a nota do participante ${conta}`))
       if(nota < 0 || nota > 10){
        alert(`Nota inválida`)
        continue // volta para o início do loop
       }
       if(nota >= 8){
        contS++ 
       }
        else if(nota <= 5){
            contI++
        }
        else if(nota == 6 && 7){
            contN++
        }
        soma = soma + nota
       conta++
    }
    let media = soma / 10
    alert(`Satisfeitos: ${contS} Insatisfeitos: ${contI} Média: ${media.toFixed(1)}`)
}

function exe3(){
    let conta = 1 
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    let idade

    while(conta <= 8){
        idade = Number(prompt(`Insira a idade da pessoa ${conta}`))

        if (idade < 0 || idade > 120){
            alert(`idade inválida`)
            continue
        }
        else if (idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <= 30){
            f2++
        }
        else if (idade >= 31 && idade <= 45){
            f3++
        }
        else if (idade >= 46 && idade <= 60){
            f4++
        }
        else {
            f5++
        }

        conta++
    }
    alert(`F1: ${f1} f2: ${f2} f3: ${f3} f4: ${f4} f5: ${f5}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}`)
}

function exe1(){
        let a, b, c, d, aux
        let cont = 1
        while (cont <= 5){
            
            a = Number(prompt(`Grupo: ${cont}, Informe o valor de a: `))
            if (a != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
            b = Number(prompt(`Grupo: ${cont}, Informe o valor de b: `))
            if (b != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
            c = Number(prompt(`Grupo: ${cont}, Informe o valor de c: `))
            if (c != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
            d = Number(prompt(`Grupo: ${cont}, Informe o valor de d: `))
            if (d != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
             i = 0
    
            while (i <= 3){
                if(a > b){
                    aux = a; a = b; b = aux
                }
                if (b > c){
                    aux = b; b = c; c = aux
                }
                if (c > d){
                    aux = c; c = d; d = aux
                }
                i++
        }
            alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
            alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
            cont++
    }
}

function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro
    let aux = ""
    let maiorLucro = 0
    while(preco >= 1.0){
        lucro = (preco * qtde) - despesa
        if (maiorLucro < lucro){
            maiorLucro = lucro
        }
        aux = aux + '\n' (`${preco} - ${qtde} - ${despesa} - ${lucro}`)
        qtde = qtde + 25
        preco = preco - 0.5
        
    }
    alert(aux)
    alert(maiorLucro)
}

function exe4(){
    let mult = Number(prompt(`Informe um número: `))
    for(conta = 0; conta <= 10; conta++){
        console.log(`${mult} x ${conta} = ${mult * conta}`)
    }
}

function exe5 (){
    for(conta = 0; conta <= 10; conta++){
        for(tab = 1; tab <= 10; tab++){
            console.log(`${tab} x ${conta} = ${tab * conta}`)
        }
        console.log(``)
    }
}

function exe6 (){
    let valorVista = 0
    let valorPrazo = 0
    let vTotal, pTotal, tipo, soma, prestacao, valor
    for(conta = 1; conta <= 15; conta++){
         tipo = prompt(`Insira o tipo da transação (V ou P): `).toUpperCase()
         valor = Number(prompt(`Insira o valor da transação: R$ `))
        if (tipo == 'V'){
            valorVista = valorVista + valor
        }
        else if(tipo == 'P'){
            valorPrazo = valorPrazo + valor
        }
        else{
            alert('Valor inválido')
            conta--
        }
        soma = valorVista + valorPrazo
        prestacao = valorPrazo / 3
    }
    console.log(`Valor compras a vista: ${valorVista} \nValor compras a prazo: ${valorPrazo} \nValor total das compras efetuadas: ${soma} \nValor primeira prestação: ${prestacao}`)
}

function exe7 (){
    let idade, peso, altura, idade50 = 0, alttotal = 0, pesoinf = 0, altcont = 0
    for (let cont = 1; cont <= 5; cont++) {
        console.log(`Dados da ${cont}ª pessoa:`)
        idade = Number(prompt('Idade:'))
        altura = Number(prompt('Altura:'))
        peso = Number(prompt('Peso:'))
        if (idade > 50) {
            idade50++
        }
        if (idade >= 10 && idade <= 20) {
            alttotal += altura
            altcont++
        }
        if (peso < 40) {
            pesoinf++
        }
    }

    console.log(`Pessoas com idade superior a 50: ${idade50}`)
    console.log(`Média das alturas entre 10 e 20 anos: ${alttotal / altcont}`)
    console.log(`Porcentagem de pessoas com peso inferior a 40kg: ${(pesoinf / 5) * 100}%`)
}

function exe8 (){
    let idade, peso, altura, olhos, cabelo
    let item1 = 0, item2 = 0, item2Qtde = 0, item3 = 0, item4 = 0
    for(i = 1; i <= 6; i++){
        do{
            idade = Number(prompt(`Informe idade > 0: `))
        }
        while(idade < 0)
        do{
            peso = Number(prompt(`Informe peso > 0: `))
        }
        while(peso < 0)
        do{
            altura = Number(prompt(`Informe altura > 0: `))
        }
        while(altura < 0.0)
        do{
            olhos = prompt(`Informe a cor dos olhos (A, P, V, C): `).toUpperCase()
        }
        while(olhos != "A" && olhos != "P" && olhos != "V" && olhos != "C")
            do{
            cabelo = prompt(`Informe a cor do cabelo (P, C, L, R): `).toUpperCase()
        }
        while(cabelo != "P" && cabelo != "C" && cabelo != "L" && cabelo != "R")
            // item1 idade > 50 e peso inferior < 60
        if (idade > 50  && peso < 60){
            item1++
        }
        if (altura < 1.50){
            item2 = item2 + idade
            item2Qtde++
        }
        if (olhos == 'A'){
            item3++
        }
        if (cabelos = 'R' && olhos != 'A'){
            item4++
        }
    }
    alert(`Item 1 ${item1}, Item 2 ${item2 / item2Qtde}, Item 3 ${item3/6*100}, Item 4 ${item4}`)
}

function exe9 (){
    let somaIdade = 0
    let somaPesoAlt = 0
    let porAltId = 0
    for (let i = 0; i < 10; i++){
        let idade = Number(prompt(`Informe a idade da ${i + 1}ª pessoa: `))
        somaIdade = somaIdade + idade
        let peso = Number(prompt(`Informe o peso da ${i + 1}ª pessoa: `))
        let altura = Number(prompt(`Informe a altura da ${i + 1}ª pessoa: `))
        if (peso >= 90 && altura <= 1.50){
            somaPesoAlt = somaPesoAlt + 1
        }
        if (idade > 10 && idade < 30 && altura >= 1.90){
            porAltId = porAltId + 1
        }
    }
    alert(`Item 1: ${somaIdade / 10}`)
    alert(`Item 2: ${somaPesoAlt}`)
    alert(`Item 3: ${(porAltId / 10) * 100}%`)
}

function exe10 (){
    let nmrPar = 0
    let nmrPrimo = 0
    for (let i = 0; i < 10; i++){
        let nmr = Number(prompt(`Informe o ${i + 1}º número:`))
        if (nmr % 2 === 0){
            nmrPar = nmrPar + nmr
        }
        if (nmr % 1 === 0 && nmr % nmr === 0){
            nmrPrimo = nmrPrimo + nmr
        }
    }
    alert(`Soma dos números pares: ${nmrPar}, Soma dos números primos: ${nmrPrimo}`)
}
function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}

function pesquisaSatisfacao(){
    let nota = 0
    let soma = 0
    let conta = 1
    let contN = 0
    let contS = 0
    let contI = 0


    nota = 0
    while(conta < 10){
       nota = Number(prompt(`Informe a nota do participante ${conta}`))
       if(nota < 0 || nota > 10){
        alert(`Nota inválida`)
        continue // volta para o início do loop
       }
       if(nota >= 8){
        contS++ 
       }
        else if(nota <= 5){
            contI++
        }
        else if(nota == 6 && 7){
            contN++
        }
        soma = soma + nota
       conta++
    }
    let media = soma / 10
    alert(`Satisfeitos: ${contS} Insatisfeitos: ${contI} Média: ${media.toFixed(1)}`)
}

function exe3(){
    let conta = 1 
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    let idade

    while(conta <= 8){
        idade = Number(prompt(`Insira a idade da pessoa ${conta}`))

        if (idade < 0 || idade > 120){
            alert(`idade inválida`)
            continue
        }
        else if (idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <= 30){
            f2++
        }
        else if (idade >= 31 && idade <= 45){
            f3++
        }
        else if (idade >= 46 && idade <= 60){
            f4++
        }
        else {
            f5++
        }

        conta++
    }
    alert(`F1: ${f1} f2: ${f2} f3: ${f3} f4: ${f4} f5: ${f5}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}`)
}

function exe1(){
        let a, b, c, d, aux
        let cont = 1
        while (cont <= 5){
            
            a = Number(prompt(`Grupo: ${cont}, Informe o valor de a: `))
            if (a != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
            b = Number(prompt(`Grupo: ${cont}, Informe o valor de b: `))
            if (b != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
            c = Number(prompt(`Grupo: ${cont}, Informe o valor de c: `))
            if (c != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
            d = Number(prompt(`Grupo: ${cont}, Informe o valor de d: `))
            if (d != Number){
                alert(`Porfavor informe um número válido`)
                    continue
            }
             i = 0
    
            while (i <= 3){
                if(a > b){
                    aux = a; a = b; b = aux
                }
                if (b > c){
                    aux = b; b = c; c = aux
                }
                if (c > d){
                    aux = c; c = d; d = aux
                }
                i++
        }
            alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
            alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
            cont++
    }
}

function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro
    let aux = ""
    let maiorLucro = 0
    while(preco >= 1.0){
        lucro = (preco * qtde) - despesa
        if (maiorLucro < lucro){
            maiorLucro = lucro
        }
        aux = aux + '\n' (`${preco} - ${qtde} - ${despesa} - ${lucro}`)
        qtde = qtde + 25
        preco = preco - 0.5
        
    }
    alert(aux)
    alert(maiorLucro)
}

function exe4(){
    let mult = Number(prompt(`Informe um número: `))
    for(conta = 0; conta <= 10; conta++){
        console.log(`${mult} x ${conta} = ${mult * conta}`)
    }
}

function exe5 (){
    for(conta = 0; conta <= 10; conta++){
        for(tab = 1; tab <= 10; tab++){
            console.log(`${tab} x ${conta} = ${tab * conta}`)
        }
        console.log(``)
    }
}

function exe6 (){
    let valorVista = 0
    let valorPrazo = 0
    let vTotal, pTotal, tipo, soma, prestacao, valor
    for(conta = 1; conta <= 15; conta++){
         tipo = prompt(`Insira o tipo da transação (V ou P): `).toUpperCase()
         valor = Number(prompt(`Insira o valor da transação: R$ `))
        if (tipo == 'V'){
            valorVista = valorVista + valor
        }
        else if(tipo == 'P'){
            valorPrazo = valorPrazo + valor
        }
        else{
            alert('Valor inválido')
            conta--
        }
        soma = valorVista + valorPrazo
        prestacao = valorPrazo / 3
    }
    console.log(`Valor compras a vista: ${valorVista} \nValor compras a prazo: ${valorPrazo} \nValor total das compras efetuadas: ${soma} \nValor primeira prestação: ${prestacao}`)
}

function exe7 (){
    let idade, peso, altura, idade50 = 0, alttotal = 0, pesoinf = 0, altcont = 0
    for (let cont = 1; cont <= 5; cont++) {
        console.log(`Dados da ${cont}ª pessoa:`)
        idade = Number(prompt('Idade:'))
        altura = Number(prompt('Altura:'))
        peso = Number(prompt('Peso:'))
        if (idade > 50) {
            idade50++
        }
        if (idade >= 10 && idade <= 20) {
            alttotal += altura
            altcont++
        }
        if (peso < 40) {
            pesoinf++
        }
    }

    console.log(`Pessoas com idade superior a 50: ${idade50}`)
    console.log(`Média das alturas entre 10 e 20 anos: ${alttotal / altcont}`)
    console.log(`Porcentagem de pessoas com peso inferior a 40kg: ${(pesoinf / 5) * 100}%`)
}

function exe8 (){
    let idade, peso, altura, olhos, cabelo
    let item1 = 0, item2 = 0, item2Qtde = 0, item3 = 0, item4 = 0
    for(i = 1; i <= 6; i++){
        do{
            idade = Number(prompt(`Informe idade > 0: `))
        }
        while(idade < 0)
        do{
            peso = Number(prompt(`Informe peso > 0: `))
        }
        while(peso < 0)
        do{
            altura = Number(prompt(`Informe altura > 0: `))
        }
        while(altura < 0.0)
        do{
            olhos = prompt(`Informe a cor dos olhos (A, P, V, C): `).toUpperCase()
        }
        while(olhos != "A" && olhos != "P" && olhos != "V" && olhos != "C")
            do{
            cabelo = prompt(`Informe a cor do cabelo (P, C, L, R): `).toUpperCase()
        }
        while(cabelo != "P" && cabelo != "C" && cabelo != "L" && cabelo != "R")
            // item1 idade > 50 e peso inferior < 60
        if (idade > 50  && peso < 60){
            item1++
        }
        if (altura < 1.50){
            item2 = item2 + idade
            item2Qtde++
        }
        if (olhos == 'A'){
            item3++
        }
        if (cabelos = 'R' && olhos != 'A'){
            item4++
        }
    }
    alert(`Item 1 ${item1}, Item 2 ${item2 / item2Qtde}, Item 3 ${item3/6*100}, Item 4 ${item4}`)
}

function exe9 (){
    let somaIdade = 0
    let somaPesoAlt = 0
    let porAltId = 0
    for (let i = 0; i < 10; i++){
        let idade = Number(prompt(`Informe a idade da ${i + 1}ª pessoa: `))
        somaIdade = somaIdade + idade
        let peso = Number(prompt(`Informe o peso da ${i + 1}ª pessoa: `))
        let altura = Number(prompt(`Informe a altura da ${i + 1}ª pessoa: `))
        if (peso >= 90 && altura <= 1.50){
            somaPesoAlt = somaPesoAlt + 1
        }
        if (idade > 10 && idade < 30 && altura >= 1.90){
            porAltId = porAltId + 1
        }
    }
    alert(`Item 1: ${somaIdade / 10}`)
    alert(`Item 2: ${somaPesoAlt}`)
    alert(`Item 3: ${(porAltId / 10) * 100}%`)
}

function exe10 (){
    let nmrPar = 0
    let nmrPrimo = 0
    for (let i = 0; i < 10; i++){
        let nmr = Number(prompt(`Informe o ${i + 1}º número:`))
        if (nmr % 2 === 0){
            nmrPar = nmrPar + nmr
        }
        if (nmr % 1 === 0 && nmr % nmr === 0){
            nmrPrimo = nmrPrimo + nmr
        }
    }
    alert(`Soma dos números pares: ${nmrPar}, Soma dos números primos: ${nmrPrimo}`)
}
