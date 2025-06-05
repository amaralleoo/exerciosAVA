function exemplo(){
    //declarar o vetor
    let vet = []
    //solicita a entrada de dados
    for(let i = 0; i < 10; i++){
        vet.push(Number(prompt(`Informe o ${i + 1} elemento`)))
    }
    //calcular a média
    let soma = 0
    for(let i = 0; i < vet.length; i++){
        soma = soma + vet[i]
    }
    alert(`A média é: ${soma / vet.length}`)
}
//.push inseri o valor dentro do vetor na ultima posição
//.lenght tamanho do vetor
function exemplo2(){
    let vet = []
    let pares = []
    let impares = []
    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o ${i + 1} número`)))
    }
    for(let i = 0; i < 6; i++){
        if (vet[i] % 2 == 0){
            pares.push(vet[i])
         }
         else{
            impares.push(vet[i])
         }
    }
    alert(`Quantidade de números pares: ${pares.length}. Números pares: ${pares}`) 
    alert(`Quantidade de números impares: ${impares.length}. Números impares: ${impares}`)
}

function exemplo3(){
    let vet = []
    let pares = []
    let impares = []
    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o ${i + 1} número`)))
    }
    for(let i = 0; i < 6; i++){
        if (i % 2 == 0){
            pares.push(vet[i] + 10)
         }
         else{
            impares.push(vet[i] * 3)
         }
    }
    alert(`Posições pares: ${pares}`) 
    alert(`Posições impares: ${impares}`)
}

function exe3(){
    let vet = []
    let gostouMuito = 0
    let gostou = 0
    let naoGostou = 0
    for(let i = 0; i < 10; i++){
        do{
        vet[i] = (Number(prompt(`Informe a sua opnião: 1- Gostou muito, 2- Gostou, 3- Não gostou`)))
        }
        while(vet[i] != 1 && vet[i] != 2 && vet[i] != 3)
    }
    for(vet[i]= 0; i < 10; i++){
        if (vet[i]== 1){
            gostouMuito++
         }
         else if (vet[i] == 2){
            gostou++
         }
         else{
            naoGostou++
         }
    }
    alert(`Gostou muito: ${gostouMuito}, Gostou: ${gostou}, Não gostou: ${naoGostou}; e  ${naoGostou/10 * 100}%`) 
}