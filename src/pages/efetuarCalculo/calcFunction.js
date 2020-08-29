export default function calcFunction(
  activedShape,
  alturaParede,
  larguraParede,
  alturaPlaca,
  larguraPlaca,
  ladoPlaca
) {
  let areaParede = alturaParede * larguraParede;
  let areaPlaca = 0;
  let alturaTrianguloEquilatero = 0;

  if (ladoPlaca !== "") {
    alturaTrianguloEquilatero = (ladoPlaca * Math.sqrt(3)) / 2;
  }

  if (activedShape.quadrado || activedShape.retangulo) {
    areaPlaca = alturaPlaca * larguraPlaca;
  } else {
    if (activedShape.triangulo) {
      areaPlaca = (ladoPlaca * alturaTrianguloEquilatero) / 2;
    } else {
      if (activedShape.hexagono) {
        areaPlaca = ((ladoPlaca * alturaTrianguloEquilatero) / 2) * 6;
      }
    }
  }

  const placasQTD = areaParede / areaPlaca;

  // const result = ;

  return {
    alturaParede,
    larguraParede,
    alturaPlaca,
    larguraPlaca,
    activedShape,
    ladoPlaca,
    placasPorParede: Math.round(placasQTD),
  };
}
