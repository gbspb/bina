

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
