export default function calcFunction(
  activedShape,
  alturaParede,
  LarguraParede,
  alturaPlaca,
  larguraPlaca,
  ladoPlaca
) {
  let areaParede = alturaParede * LarguraParede;
  let areaPlaca = 0;
  let alturaTrianguloEquilatero = 0;

  if (ladoPlaca !== "") {
    alturaTrianguloEquilatero = (ladoPlaca * Math.sqrt(3)) / 2;
  }

  if (activedShape.quadrado) {
    areaPlaca = alturaPlaca * alturaPlaca;
  } else {
    if (activedShape.retangulo) {
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
  }

  const placasQTD = areaParede / areaPlaca;

  const result = {
    areaParede,
    areaPlaca,
    placasPorParede: Math.round(placasQTD),
  };

  return result;
}
