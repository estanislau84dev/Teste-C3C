function LuidyMoura(numero) {
    let contador = []
    for (let i = 1; i <= numero; i++) {
        if (i % 5 == 0 && i % 9 == 0) {
            contador.push("LuidyMoura")
        } else if (i % 5 == 0) {
            contador.push("Luidy")
        } else if (i % 9 == 0) {
            contador.push("Moura")
        } else {
            contador.push(i)
        }

    }
    console.log(contador.join(", "))
}

LuidyMoura(100)