const listaArgumentos = process.argv.slice(2);

console.log("--------------- EXECUTANDO FOR ---------------");
for (let controladorLista = 0; controladorLista < listaArgumentos.length; controladorLista++) {
    console.log(`Posição ${controladorLista}, valor lido = ${listaArgumentos[controladorLista]}`);
};

console.log("--------------- EXECUTANDO WHILE ---------------");
let controladorWhile = 0;
while (controladorWhile < listaArgumentos.length) {
    console.log(`Posição ${controladorWhile}, valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
};

console.log("--------------- EXECUTANDO DO WHILE ---------------");

let controladorDoWhile = 0;
do {
    console.log(`Posição ${controladorDoWhile}, valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while (controladorDoWhile < listaArgumentos.length);

console.log("--------------- EXECUTANDO FOR OF ---------------");

for (const argumento of listaArgumentos) {
    console.log(`Valor lido = ${argumento}`);
}