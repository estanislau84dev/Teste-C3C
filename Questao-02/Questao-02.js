
const bhaskara = (ax2, bx, c) => {
    let calculo = [];
    let delta = (bx ** 2) - (4 * ax2 * c);
    if (delta < 0) {
        return "Delta é negativo";
    }
    var x1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    var x2 = (-bx - Math.sqrt(delta)) / 2 * ax2;
    calculo.push(x1);
    calculo.push(x2);
    return calculo;
}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, 3, 2));