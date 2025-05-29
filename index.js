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
    let idade, peso, altura
    let qtdePessoa50 = 0
    let qtdePessoaPeso
    for(let conta = 1; conta <= 5; conta++){
        idade = Number(prompt(`Informe idade da pessoa ${conta}`))
        peso = Number(prompt(`Informe peso da pessoa ${conta}`))
        altura = Number(prompt(`Informe altura da pessoa ${conta}`))
        if (idade > 50){
            qntdePessoa50++
        }
        if (peso < 40){
            qntdePessoaPeso++
        }
        if (idade >= 10 && idade <= 20){
            
        }
    }
}