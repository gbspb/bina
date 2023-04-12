

function calcularCereaisLeguminosas() {
  // Obter valores selecionados pelo usuário
  let cereaisLeguminosas = document.getElementById("cereaisLeguminosas").value;
  let quantidadeCereaisLeguminosas = parseFloat(document.getElementById("quantidadeCereaisLeguminosas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (cereaisLeguminosas === "arrozPPAA") {
    energia = 1.3562 * quantidadeCereaisLeguminosas
    proteina = 0.025 * quantidadeCereaisLeguminosas
    lipidios = 0.012 * quantidadeCereaisLeguminosas
    carboidrato = 0.2778 * quantidadeCereaisLeguminosas
    fibra = 0.0155 * quantidadeCereaisLeguminosas
    agSaturados = 0.0035 * quantidadeCereaisLeguminosas
    acucarTotal = 0 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0008 * quantidadeCereaisLeguminosas
    sodio = 0.0119 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "arrozIntegral") {
    energia = 1.3095 * quantidadeCereaisLeguminosas
    proteina = 0.0256 * quantidadeCereaisLeguminosas
    lipidios = 0.0197 * quantidadeCereaisLeguminosas
    carboidrato = 0.2556 * quantidadeCereaisLeguminosas
    fibra = 0.0272 * quantidadeCereaisLeguminosas
    agSaturados = 0.0045 * quantidadeCereaisLeguminosas
    acucarTotal = 0 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0026 * quantidadeCereaisLeguminosas
    sodio = 0.0123 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "milhoGraoCru") {
    energia = 1.6014 * quantidadeCereaisLeguminosas
    proteina = 0.0332 * quantidadeCereaisLeguminosas
    lipidios = 0.0718 * quantidadeCereaisLeguminosas
    carboidrato = 0.2511 * quantidadeCereaisLeguminosas
    fibra = 0.0425 * quantidadeCereaisLeguminosas
    agSaturados = 0.0112 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0316 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0045 * quantidadeCereaisLeguminosas
    sodio = 2.4496 * quantidadeCereaisLeguminosas
  }
  // Exibir resultados na página
  document.getElementById("resultadoEnergia").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteina").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidios").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidrato").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibra").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturados").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotal").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicao").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerro").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodio").textContent = sodio.toFixed(2) + " mg";
}

function calcularHortalicasTuberosas() {
  // Obter valores selecionados pelo usuário
  let hortalicasTuberosas = document.getElementById("hortalicasTuberosas").value;
  let quantidadeHortalicasTuberosas = parseFloat(document.getElementById("quantidadeHortalicasTuberosas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (hortalicasTuberosas === "batataInglesaCrua") {
    energia = 0.86 * quantidadeHortalicasTuberosas
    proteina = 0.0171 * quantidadeHortalicasTuberosas
    lipidios = 0.001 * quantidadeHortalicasTuberosas
    carboidrato = 0.2001 * quantidadeHortalicasTuberosas
    fibra = 0.0205 * quantidadeHortalicasTuberosas
    agSaturados = 0.0003 * quantidadeHortalicasTuberosas
    acucarTotal = 0.0086 * quantidadeHortalicasTuberosas
    acucarDeAdicao = 0 * quantidadeHortalicasTuberosas
    ferro = 0.0031 * quantidadeHortalicasTuberosas
    sodio = 0.05 * quantidadeHortalicasTuberosas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield2").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield2").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield2").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield2").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield2").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield2").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield2").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield2").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield2").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield2").textContent = sodio.toFixed(2) + " mg";
}

function calcularFarinhasFeculasMassas() {
  // Obter valores selecionados pelo usuário
  let farinhasFeculasMassas = document.getElementById("farinhasFeculasMassas").value;
  let quantidadeFarinhasFeculasMassas = parseFloat(document.getElementById("quantidadeFarinhasFeculasMassas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (farinhasFeculasMassas === "cremeDeArroz") {
    energia = 1.4832 * quantidadeFarinhasFeculasMassas
    proteina = 0.038 * quantidadeFarinhasFeculasMassas
    lipidios = 0.033 * quantidadeFarinhasFeculasMassas
    carboidrato = 0.2607 * quantidadeFarinhasFeculasMassas
    fibra = 0.003 * quantidadeFarinhasFeculasMassas
    agSaturados = 0.0184 * quantidadeFarinhasFeculasMassas
    acucarTotal = 0.174 * quantidadeFarinhasFeculasMassas
    acucarDeAdicao = 0.1233 * quantidadeFarinhasFeculasMassas
    ferro = 0.0008 * quantidadeFarinhasFeculasMassas
    sodio = 3.873 * quantidadeFarinhasFeculasMassas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield3").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield3").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield3").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield3").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield3").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield3").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield3").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield3").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield3").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield3").textContent = sodio.toFixed(2) + " mg";
}

function calcularCocosCastanhasNozes() {
  // Obter valores selecionados pelo usuário
  let cocosCastanhasNozes = document.getElementById("cocosCastanhasNozes").value;
  let quantidadeCocosCastanhasNozes = parseFloat(document.getElementById("quantidadeCocosCastanhasNozes").value);

  // Fazer o cálculo com base nos valores selecionados
  if (cocosCastanhasNozes === "cocoDaBaia") {
    energia = 3.54 * quantidadeCocosCastanhasNozes
    proteina = 0.0333 * quantidadeCocosCastanhasNozes
    lipidios = 0.3349 * quantidadeCocosCastanhasNozes
    carboidrato = 0.1523 * quantidadeCocosCastanhasNozes
    fibra = 0.09 * quantidadeCocosCastanhasNozes
    agSaturados = 0.297 * quantidadeCocosCastanhasNozes
    acucarTotal = 0.035 * quantidadeCocosCastanhasNozes
    acucarDeAdicao = 0 * quantidadeCocosCastanhasNozes
    ferro = 0.0243 * quantidadeCocosCastanhasNozes
    sodio = 0.2 * quantidadeCocosCastanhasNozes
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield4").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield4").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield4").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield4").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield4").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield4").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield4").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield4").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield4").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield4").textContent = sodio.toFixed(2) + " mg";
}

function calcularHortalicasFolhosasFrutosasOutras() {
  // Obter valores selecionados pelo usuário
  let hortalicasFolhosasFrutosasOutras = document.getElementById("hortalicasFolhosasFrutosasOutras").value;
  let quantidadeHortalicasFolhosasFrutosasOutras = parseFloat(document.getElementById("quantidadeHortalicasFolhosasFrutosasOutras").value);

  // Fazer o cálculo com base nos valores selecionados
  if (hortalicasFolhosasFrutosasOutras === "alface") {
    energia = 0.15 * quantidadeHortalicasFolhosasFrutosasOutras
    proteina = 0.0136 * quantidadeHortalicasFolhosasFrutosasOutras
    lipidios = 0.0015 * quantidadeHortalicasFolhosasFrutosasOutras
    carboidrato = 0.0279 * quantidadeHortalicasFolhosasFrutosasOutras
    fibra = 0.013 * quantidadeHortalicasFolhosasFrutosasOutras
    agSaturados = 0.0002 * quantidadeHortalicasFolhosasFrutosasOutras
    acucarTotal = 0.0079 * quantidadeHortalicasFolhosasFrutosasOutras
    acucarDeAdicao = 0 * quantidadeHortalicasFolhosasFrutosasOutras
    ferro = 0.0086 * quantidadeHortalicasFolhosasFrutosasOutras
    sodio = 0.28 * quantidadeHortalicasFolhosasFrutosasOutras
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield5").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield5").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield5").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield5").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield5").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield5").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield5").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield5").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield5").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield5").textContent = sodio.toFixed(2) + " mg";
}

function calcularFrutas() {
  // Obter valores selecionados pelo usuário
  let frutas = document.getElementById("frutas").value;
  let quantidadeFrutas = parseFloat(document.getElementById("quantidadeFrutas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (frutas === "pacova") {
    energia = 0.78 * quantidadeFrutas
    proteina = 0.012 * quantidadeFrutas
    lipidios = 0.001 * quantidadeFrutas
    carboidrato = 0.203 * quantidadeFrutas
    fibra = 0.02 * quantidadeFrutas
    agSaturados = 0 * quantidadeFrutas
    acucarTotal = 0 * quantidadeFrutas
    acucarDeAdicao = 0 * quantidadeFrutas
    ferro = 0.004 * quantidadeFrutas
    sodio = 0.01 * quantidadeFrutas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield6").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield6").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield6").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield6").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield6").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield6").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield6").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield6").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield6").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield6").textContent = sodio.toFixed(2) + " mg";
}

function calcularAcucaresProdutosDeConfeitaria() {
  // Obter valores selecionados pelo usuário
  let acucaresProdutosDeConfeitaria = document.getElementById("acucaresProdutosDeConfeitaria").value;
  let quantidadeAcucaresProdutosDeConfeitaria = parseFloat(document.getElementById("quantidadeAcucaresProdutosDeConfeitaria").value);

  // Fazer o cálculo com base nos valores selecionados
  if (acucaresProdutosDeConfeitaria === "demerara") {
    energia = 3.87 * quantidadeAcucaresProdutosDeConfeitaria
    proteina = 0 * quantidadeAcucaresProdutosDeConfeitaria
    lipidios = 0 * quantidadeAcucaresProdutosDeConfeitaria
    carboidrato = 0.9998 * quantidadeAcucaresProdutosDeConfeitaria
    fibra = 0 * quantidadeAcucaresProdutosDeConfeitaria
    agSaturados = 0 * quantidadeAcucaresProdutosDeConfeitaria
    acucarTotal = 0.9991 * quantidadeAcucaresProdutosDeConfeitaria
    acucarDeAdicao = 0.9998 * quantidadeAcucaresProdutosDeConfeitaria
    ferro = 0.0001 * quantidadeAcucaresProdutosDeConfeitaria
    sodio = 0 * quantidadeAcucaresProdutosDeConfeitaria
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield7").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield7").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield7").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield7").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield7").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield7").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield7").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield7").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield7").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield7").textContent = sodio.toFixed(2) + " mg";
}

function calcularSaisCondimentos() {
  // Obter valores selecionados pelo usuário
  let saisCondimentos = document.getElementById("saisCondimentos").value;
  let quantidadeSaisCondimentos = parseFloat(document.getElementById("quantidadeSaisCondimentos").value);

  // Fazer o cálculo com base nos valores selecionados
  if (saisCondimentos === "mostardaMolho") {
    energia = 0.67 * quantidadeSaisCondimentos
    proteina = 0.0437 * quantidadeSaisCondimentos
    lipidios = 0.0401 * quantidadeSaisCondimentos
    carboidrato = 0.0533 * quantidadeSaisCondimentos
    fibra = 0.033 * quantidadeSaisCondimentos
    agSaturados = 0.0025 * quantidadeSaisCondimentos
    acucarTotal = 0.0086 * quantidadeSaisCondimentos
    acucarDeAdicao = 0 * quantidadeSaisCondimentos
    ferro = 0.0151 * quantidadeSaisCondimentos
    sodio = 11.35 * quantidadeSaisCondimentos
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield8").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield8").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield8").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield8").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield8").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield8").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield8").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield8").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield8").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield8").textContent = sodio.toFixed(2) + " mg";
}

function calcularCarnesVisceras() {
  // Obter valores selecionados pelo usuário
  let carnesVisceras = document.getElementById("carnesVisceras").value;
  let quantidadeCarnesVisceras = parseFloat(document.getElementById("quantidadeCarnesVisceras").value);

  // Fazer o cálculo com base nos valores selecionados
  if (carnesVisceras === "fileMignon") {
    energia = 2.04 * quantidadeCarnesVisceras
    proteina = 0.3067 * quantidadeCarnesVisceras
    lipidios = 0.09 * quantidadeCarnesVisceras
    carboidrato = 0 * quantidadeCarnesVisceras
    fibra = 0 * quantidadeCarnesVisceras
    agSaturados = 0.0342 * quantidadeCarnesVisceras
    acucarTotal = 0 * quantidadeCarnesVisceras
    acucarDeAdicao = 0 * quantidadeCarnesVisceras
    ferro = 0.0253 * quantidadeCarnesVisceras
    sodio = 0.41 * quantidadeCarnesVisceras
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield9").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield9").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield9").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield9").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield9").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield9").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield9").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield9").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield9").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield9").textContent = sodio.toFixed(2) + " mg";
}

function calcularPescadosFrutosDoMar() {
  // Obter valores selecionados pelo usuário
  let pescadosFrutosDoMar = document.getElementById("pescadosFrutosDoMar").value;
  let quantidadePescadosFrutosDoMar = parseFloat(document.getElementById("quantidadePescadosFrutosDoMar").value);

  // Fazer o cálculo com base nos valores selecionados
  if (pescadosFrutosDoMar === "peixeDeMar") {
    energia = 1.17 * quantidadePescadosFrutosDoMar
    proteina = 0.2416 * quantidadePescadosFrutosDoMar
    lipidios = 0.0153 * quantidadePescadosFrutosDoMar
    carboidrato = 0 * quantidadePescadosFrutosDoMar
    fibra = 0 * quantidadePescadosFrutosDoMar
    agSaturados = 0.0036 * quantidadePescadosFrutosDoMar
    acucarTotal = 0 * quantidadePescadosFrutosDoMar
    acucarDeAdicao = 0 * quantidadePescadosFrutosDoMar
    ferro = 0.0034 * quantidadePescadosFrutosDoMar
    sodio = 1.05 * quantidadePescadosFrutosDoMar
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield10").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield10").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield10").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield10").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield10").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield10").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield10").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield10").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield10").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield10").textContent = sodio.toFixed(2) + " mg";
}

function calcularEnlatadosConservas() {
  // Obter valores selecionados pelo usuário
  let enlatadosConservas = document.getElementById("enlatadosConservas").value;
  let quantidadeEnlatadosConservas = parseFloat(document.getElementById("quantidadeEnlatadosConservas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (enlatadosConservas === "peixeDeMar") {
    energia = 1.45 * quantidadeEnlatadosConservas
    proteina = 0.0103 * quantidadeEnlatadosConservas
    lipidios = 0.1532 * quantidadeEnlatadosConservas
    carboidrato = 0.0384 * quantidadeEnlatadosConservas
    fibra = 0.033 * quantidadeEnlatadosConservas
    agSaturados = 0.0203 * quantidadeEnlatadosConservas
    acucarTotal = 0 * quantidadeEnlatadosConservas
    acucarDeAdicao = 0 * quantidadeEnlatadosConservas
    ferro = 0.0049 * quantidadeEnlatadosConservas
    sodio = 15.56 * quantidadeEnlatadosConservas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield11").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield11").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield11").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield11").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield11").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield11").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield11").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield11").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield11").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield11").textContent = sodio.toFixed(2) + " mg";
}