function disco(minimo: number, mayor: number) {
  let edades: number[] = new Array(5);
  let menores21: number[] = new Array();
  let mayores21: number[] = new Array();

  for (let index = 0; index < edades.length; index++) {
    edades[index] = Math.floor(Math.random() * (mayor - minimo)) + minimo;
    console.log("las edades ingresadas son:" + edades);
    if (edades[index] < 21) {
      menores21[index] = edades[index];
      console.log("Los menores de edad son:" + menores21);
      console.log("La cantidad de menores de 21 es:" + menores21.length);
    } else if (edades[index] > 21 || edades[index] === 21)
      mayores21[index] = edades[index];
    console.log("los mayores de edad son:" + mayores21);
    console.log("La cantidad de mayores de 21 es:" + mayores21.length);
  }
  return disco;
}

disco(19, 40);
