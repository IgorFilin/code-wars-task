// Для данной химической формулы, представленной строкой, подсчитайте количество атомов каждого элемента, содержащегося в молекуле, и верните объект (ассоциативный массив в PHP, Dictionary<string, int> в C#, Map<String,Integer> в Java) .
//
// Например:
// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}
//
// var magnesiumHydroxide = 'Mg(HO)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}
//
// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}


function parseMolecule(formula) {
    // do your science here
   let arr = []
    for (let i = 0; i < formula.length; i++) {

    }

    return arr

}

console.log(parseMolecule('Mg(OH)2'))

