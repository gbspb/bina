

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
  if (cereaisLeguminosas === "arrozOrganico") {
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
  if (cereaisLeguminosas === "arrozIntegralOrganico") {
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
  if (cereaisLeguminosas === "milhoGraoCozido") {
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
  if (cereaisLeguminosas === "milhoGraoGrelhadoBrasaChurrasco") {
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
  if (cereaisLeguminosas === "milhoGraoAssado") {
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
  if (cereaisLeguminosas === "milhoGraoRefogado") {
    energia = 1.6014 * quantidadeCereaisLeguminosas
    proteina = 0.0332 * quantidadeCereaisLeguminosas
    lipidios = 0.0718 * quantidadeCereaisLeguminosas
    carboidrato = 0.2511 * quantidadeCereaisLeguminosas
    fibra = 0.0425 * quantidadeCereaisLeguminosas
    agSaturados = 0.0112 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0316 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0044 * quantidadeCereaisLeguminosas
    sodio = 0 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "milhoGraoEnsopado") {
    energia = 1.6014 * quantidadeCereaisLeguminosas
    proteina = 0.0332 * quantidadeCereaisLeguminosas
    lipidios = 0.0718 * quantidadeCereaisLeguminosas
    carboidrato = 0.2511 * quantidadeCereaisLeguminosas
    fibra = 0.0425 * quantidadeCereaisLeguminosas
    agSaturados = 0.0112 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0316 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0044 * quantidadeCereaisLeguminosas
    sodio = 0 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "milhoGrao") {
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
  if (cereaisLeguminosas === "canjiquinhaDeMilhoEmGraoCrua") {
    energia = 0.7968 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.022 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0033 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 1.315 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "canjiquinhaDeMilhoEmGraoCozida") {
    energia = 0.6295 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.0031 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 0.0501 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "canjiquinhaDeMilhoEmGraoEnsopada") {
    energia = 0.7968 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.022 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0033 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 0.0501 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "canjiquinhaDeMilhoEmGraoMingau") {
    energia = 0.6295 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.0031 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 0.0501 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "canjiquinhaDeMilhoEmGraoSopa") {
    energia = 0.3144 * quantidadeCereaisLeguminosas
    proteina = 0.0095 * quantidadeCereaisLeguminosas
    lipidios = 0.0012 * quantidadeCereaisLeguminosas
    carboidrato = 0.0701 * quantidadeCereaisLeguminosas
    fibra = 0.0071 * quantidadeCereaisLeguminosas
    agSaturados = 0.0004 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0328 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0.0252 * quantidadeCereaisLeguminosas
    ferro = 0.0029 * quantidadeCereaisLeguminosas
    sodio = 3.1043 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "canjiquinhaDeMilhoEmGrao") {
    energia = 0.6295 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.0031 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 0.0501 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "xeremDeMilho") {
    energia = 0.6295 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.0031 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 0.0501 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "amendoimEmGraoInNatura") {
    energia = 5.67 * quantidadeCereaisLeguminosas
    proteina = 0.258 * quantidadeCereaisLeguminosas
    lipidios = 0.4924 * quantidadeCereaisLeguminosas
    carboidrato = 0.1613 * quantidadeCereaisLeguminosas
    fibra = 0.085 * quantidadeCereaisLeguminosas
    agSaturados = 0.0683 * quantidadeCereaisLeguminosas
    acucarTotal = 0.04 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0458 * quantidadeCereaisLeguminosas
    sodio = 0.18 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "ervilhaEmGrao") {
    energia = 1.0909 * quantidadeCereaisLeguminosas
    proteina = 0.0536 * quantidadeCereaisLeguminosas
    lipidios = 0.0306 * quantidadeCereaisLeguminosas
    carboidrato = 0.1563 * quantidadeCereaisLeguminosas
    fibra = 0.055 * quantidadeCereaisLeguminosas
    agSaturados = 0.0048 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0594 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0154 * quantidadeCereaisLeguminosas
    sodio = 0.03 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "favaEmGrao") {
    energia = 0.8562 * quantidadeCereaisLeguminosas
    proteina = 0.048 * quantidadeCereaisLeguminosas
    lipidios = 0.0317 * quantidadeCereaisLeguminosas
    carboidrato = 0.101 * quantidadeCereaisLeguminosas
    fibra = 0.036 * quantidadeCereaisLeguminosas
    agSaturados = 0.0056 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0124 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.015 * quantidadeCereaisLeguminosas
    sodio = 0.41 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "mangaloAmargoEmGrao") {
    energia = 0.8562 * quantidadeCereaisLeguminosas
    proteina = 0.048 * quantidadeCereaisLeguminosas
    lipidios = 0.0317 * quantidadeCereaisLeguminosas
    carboidrato = 0.101 * quantidadeCereaisLeguminosas
    fibra = 0.036 * quantidadeCereaisLeguminosas
    agSaturados = 0.0056 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0124 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.015 * quantidadeCereaisLeguminosas
    sodio = 0.41 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "feijaoDeCorda") {
    energia = 1.2133 * quantidadeCereaisLeguminosas
    proteina = 0.0317 * quantidadeCereaisLeguminosas
    lipidios = 0.0313 * quantidadeCereaisLeguminosas
    carboidrato = 0.2032 * quantidadeCereaisLeguminosas
    fibra = 0.05 * quantidadeCereaisLeguminosas
    agSaturados = 0.0053 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0034 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0112 * quantidadeCereaisLeguminosas
    sodio = 0.04 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "feijaoVerde") {
    energia = 1.2133 * quantidadeCereaisLeguminosas
    proteina = 0.0317 * quantidadeCereaisLeguminosas
    lipidios = 0.0313 * quantidadeCereaisLeguminosas
    carboidrato = 0.2032 * quantidadeCereaisLeguminosas
    fibra = 0.05 * quantidadeCereaisLeguminosas
    agSaturados = 0.0053 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0034 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0112 * quantidadeCereaisLeguminosas
    sodio = 0.04 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "feijaoVerdeOrganico") {
    energia = 1.2133 * quantidadeCereaisLeguminosas
    proteina = 0.0317 * quantidadeCereaisLeguminosas
    lipidios = 0.0313 * quantidadeCereaisLeguminosas
    carboidrato = 0.2032 * quantidadeCereaisLeguminosas
    fibra = 0.05 * quantidadeCereaisLeguminosas
    agSaturados = 0.0053 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0034 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0112 * quantidadeCereaisLeguminosas
    sodio = 0.04 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "sementeDeLinhaca") {
    energia = 5.34 * quantidadeCereaisLeguminosas
    proteina = 0.1829 * quantidadeCereaisLeguminosas
    lipidios = 0.4216 * quantidadeCereaisLeguminosas
    carboidrato = 0.2888 * quantidadeCereaisLeguminosas
    fibra = 0.273 * quantidadeCereaisLeguminosas
    agSaturados = 0.0366 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0155 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0573 * quantidadeCereaisLeguminosas
    sodio = 0.3 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "andu") {
    energia = 0.9741 * quantidadeCereaisLeguminosas
    proteina = 0.0584 * quantidadeCereaisLeguminosas
    lipidios = 0.0179 * quantidadeCereaisLeguminosas
    carboidrato = 0.1505 * quantidadeCereaisLeguminosas
    fibra = 0.0378 * quantidadeCereaisLeguminosas
    agSaturados = 0.003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.003 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0222 * quantidadeCereaisLeguminosas
    sodio = 0.052 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "graoDeBico") {
    energia = 1.8848 * quantidadeCereaisLeguminosas
    proteina = 0.0886 * quantidadeCereaisLeguminosas
    lipidios = 0.0536 * quantidadeCereaisLeguminosas
    carboidrato = 0.2742 * quantidadeCereaisLeguminosas
    fibra = 0.076 * quantidadeCereaisLeguminosas
    agSaturados = 0.007 * quantidadeCereaisLeguminosas
    acucarTotal = 0.017 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0289 * quantidadeCereaisLeguminosas
    sodio = 0.07 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "lentilha") {
    energia = 1.3628 * quantidadeCereaisLeguminosas
    proteina = 0.0902 * quantidadeCereaisLeguminosas
    lipidios = 0.0267 * quantidadeCereaisLeguminosas
    carboidrato = 0.2013 * quantidadeCereaisLeguminosas
    fibra = 0.0586 * quantidadeCereaisLeguminosas
    agSaturados = 0.0041 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0039 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0333 * quantidadeCereaisLeguminosas
    sodio = 0.02 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "sojaEmGrao") {
    energia = 1.9634 * quantidadeCereaisLeguminosas
    proteina = 0.1664 * quantidadeCereaisLeguminosas
    lipidios = 0.1161 * quantidadeCereaisLeguminosas
    carboidrato = 0.0993 * quantidadeCereaisLeguminosas
    fibra = 0.06 * quantidadeCereaisLeguminosas
    agSaturados = 0.0171 * quantidadeCereaisLeguminosas
    acucarTotal = 0.008 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0514 * quantidadeCereaisLeguminosas
    sodio = 0.01 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "feijaoDeSojaOrganico") {
    energia = 1.9634 * quantidadeCereaisLeguminosas
    proteina = 0.1664 * quantidadeCereaisLeguminosas
    lipidios = 0.1161 * quantidadeCereaisLeguminosas
    carboidrato = 0.0993 * quantidadeCereaisLeguminosas
    fibra = 0.06 * quantidadeCereaisLeguminosas
    agSaturados = 0.0171 * quantidadeCereaisLeguminosas
    acucarTotal = 0.008 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0514 * quantidadeCereaisLeguminosas
    sodio = 0.01 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "feijaoPretoMulatinhoRoxoRosinha") {
    energia = 0.9741 * quantidadeCereaisLeguminosas
    proteina = 0.0584 * quantidadeCereaisLeguminosas
    lipidios = 0.0179 * quantidadeCereaisLeguminosas
    carboidrato = 0.1505 * quantidadeCereaisLeguminosas
    fibra = 0.0378 * quantidadeCereaisLeguminosas
    agSaturados = 0.003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.003 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0222 * quantidadeCereaisLeguminosas
    sodio = 0.052 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "feijaoOrganico") {
    energia = 0.9741 * quantidadeCereaisLeguminosas
    proteina = 0.0584 * quantidadeCereaisLeguminosas
    lipidios = 0.0179 * quantidadeCereaisLeguminosas
    carboidrato = 0.1505 * quantidadeCereaisLeguminosas
    fibra = 0.0378 * quantidadeCereaisLeguminosas
    agSaturados = 0.003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.003 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0222 * quantidadeCereaisLeguminosas
    sodio = 0.052 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "quireraNaoEspecificada") {
    energia = 0.6295 * quantidadeCereaisLeguminosas
    proteina = 0.0124 * quantidadeCereaisLeguminosas
    lipidios = 0.0031 * quantidadeCereaisLeguminosas
    carboidrato = 0.135 * quantidadeCereaisLeguminosas
    fibra = 0.0067 * quantidadeCereaisLeguminosas
    agSaturados = 0.0003 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0029 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0074 * quantidadeCereaisLeguminosas
    sodio = 0.0501 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "pipocaLight") {
    energia = 4.4594 * quantidadeCereaisLeguminosas
    proteina = 0.1077 * quantidadeCereaisLeguminosas
    lipidios = 0.1778 * quantidadeCereaisLeguminosas
    carboidrato = 0.6485 * quantidadeCereaisLeguminosas
    fibra = 0.1207 * quantidadeCereaisLeguminosas
    agSaturados = 0.0375 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0072 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0267 * quantidadeCereaisLeguminosas
    sodio = 10.7251 * quantidadeCereaisLeguminosas
  }
  if (cereaisLeguminosas === "quinoa") {
    energia = 1.3547 * quantidadeCereaisLeguminosas
    proteina = 0.0437 * quantidadeCereaisLeguminosas
    lipidios = 0.0433 * quantidadeCereaisLeguminosas
    carboidrato = 0.1983 * quantidadeCereaisLeguminosas
    fibra = 0.0216 * quantidadeCereaisLeguminosas
    agSaturados = 0.006 * quantidadeCereaisLeguminosas
    acucarTotal = 0.0189 * quantidadeCereaisLeguminosas
    acucarDeAdicao = 0 * quantidadeCereaisLeguminosas
    ferro = 0.0141 * quantidadeCereaisLeguminosas
    sodio = 0.0427 * quantidadeCereaisLeguminosas
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

function calcularAvesOvos() {
  // Obter valores selecionados pelo usuário
  let avesOvos = document.getElementById("avesOvos").value;
  let quantidadeAvesOvos = parseFloat(document.getElementById("quantidadeAvesOvos").value);

  // Fazer o cálculo com base nos valores selecionados
  if (avesOvos === "frangoInteiro") {
    energia = 2.39 * quantidadeAvesOvos
    proteina = 0.273 * quantidadeAvesOvos
    lipidios = 0.136 * quantidadeAvesOvos
    carboidrato = 0 * quantidadeAvesOvos
    fibra = 0 * quantidadeAvesOvos
    agSaturados = 0.0379 * quantidadeAvesOvos
    acucarTotal = 0 * quantidadeAvesOvos
    acucarDeAdicao = 0 * quantidadeAvesOvos
    ferro = 0.0126 * quantidadeAvesOvos
    sodio = 0.82 * quantidadeAvesOvos
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield12").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield12").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield12").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield12").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield12").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield12").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield12").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield12").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield12").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield12").textContent = sodio.toFixed(2) + " mg";
}

function calcularLaticinios() {
  // Obter valores selecionados pelo usuário
  let laticinios = document.getElementById("laticinios").value;
  let quantidadeLaticinios = parseFloat(document.getElementById("quantidadeLaticinios").value);

  // Fazer o cálculo com base nos valores selecionados
  if (laticinios === "leiteDeVacaIntegral") {
    energia = 0.6003 * quantidadeLaticinios
    proteina = 0.0322 * quantidadeLaticinios
    lipidios = 0.0325 * quantidadeLaticinios
    carboidrato = 0.0452 * quantidadeLaticinios
    fibra = 0 * quantidadeLaticinios
    agSaturados = 0.0187 * quantidadeLaticinios
    acucarTotal = 0.0526 * quantidadeLaticinios
    acucarDeAdicao = 0 * quantidadeLaticinios
    ferro = 0.0003 * quantidadeLaticinios
    sodio = 0.4002 * quantidadeLaticinios
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield13").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield13").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield13").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield13").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield13").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield13").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield13").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield13").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield13").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield13").textContent = sodio.toFixed(2) + " mg";
}

function calcularPanificados() {
  // Obter valores selecionados pelo usuário
  let panificados = document.getElementById("panificados").value;
  let quantidadePanificados = parseFloat(document.getElementById("quantidadePanificados").value);

  // Fazer o cálculo com base nos valores selecionados
  if (panificados === "paoDeHamburguer") {
    energia = 2.79 * quantidadePanificados
    proteina = 0.095 * quantidadePanificados
    lipidios = 0.0433 * quantidadePanificados
    carboidrato = 0.4945 * quantidadePanificados
    fibra = 0.021 * quantidadePanificados
    agSaturados = 0.0109 * quantidadePanificados
    acucarTotal = 0.0628 * quantidadePanificados
    acucarDeAdicao = 0.0631 * quantidadePanificados
    ferro = 0.0332 * quantidadePanificados
    sodio = 4.79 * quantidadePanificados
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield14").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield14").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield14").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield14").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield14").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield14").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield14").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield14").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield14").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield14").textContent = sodio.toFixed(2) + " mg";
}

function calcularCarnesIndustrializadas() {
  // Obter valores selecionados pelo usuário
  let carnesIndustrializadas = document.getElementById("carnesIndustrializadas").value;
  let quantidadeCarnesIndustrializadas = parseFloat(document.getElementById("quantidadeCarnesIndustrializadas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (carnesIndustrializadas === "carneSecaCozida") {
    energia = 3.13 * quantidadeCarnesIndustrializadas
    proteina = 0.269 * quantidadeCarnesIndustrializadas
    lipidios = 0.219 * quantidadeCarnesIndustrializadas
    carboidrato = 0 * quantidadeCarnesIndustrializadas
    fibra = 0 * quantidadeCarnesIndustrializadas
    agSaturados = 0.105 * quantidadeCarnesIndustrializadas
    acucarTotal = 0 * quantidadeCarnesIndustrializadas
    acucarDeAdicao = 0 * quantidadeCarnesIndustrializadas
    ferro = 0.019 * quantidadeCarnesIndustrializadas
    sodio = 19.43 * quantidadeCarnesIndustrializadas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield15").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield15").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield15").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield15").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield15").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield15").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield15").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield15").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield15").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield15").textContent = sodio.toFixed(2) + " mg";
}

function calcularBebidasNaoAlcoolicasInfusoes() {
  // Obter valores selecionados pelo usuário
  let bebidasNaoAlcoolicasInfusoes = document.getElementById("bebidasNaoAlcoolicasInfusoes").value;
  let quantidadeBebidasNaoAlcoolicasInfusoes = parseFloat(document.getElementById("quantidadeBebidasNaoAlcoolicasInfusoes").value);

  // Fazer o cálculo com base nos valores selecionados
  if (bebidasNaoAlcoolicasInfusoes === "refrigeranteDeColaTradicional") {
    energia = 0.3687 * quantidadeBebidasNaoAlcoolicasInfusoes
    proteina = 0.0007 * quantidadeBebidasNaoAlcoolicasInfusoes
    lipidios = 0.0002 * quantidadeBebidasNaoAlcoolicasInfusoes
    carboidrato = 0.0953 * quantidadeBebidasNaoAlcoolicasInfusoes
    fibra = 0 * quantidadeBebidasNaoAlcoolicasInfusoes
    agSaturados = 0 * quantidadeBebidasNaoAlcoolicasInfusoes
    acucarTotal = 0.1056 * quantidadeBebidasNaoAlcoolicasInfusoes
    acucarDeAdicao = 0.0953 * quantidadeBebidasNaoAlcoolicasInfusoes
    ferro = 0.0011 * quantidadeBebidasNaoAlcoolicasInfusoes
    sodio = 0.0399 * quantidadeBebidasNaoAlcoolicasInfusoes
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield16").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield16").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield16").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield16").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield16").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield16").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield16").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield16").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield16").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield16").textContent = sodio.toFixed(2) + " mg";
}

function calcularBebidasAlcoolicas() {
  // Obter valores selecionados pelo usuário
  let bebidasAlcoolicas = document.getElementById("bebidasAlcoolicas").value;
  let quantidadeBebidasAlcoolicas = parseFloat(document.getElementById("quantidadeBebidasAlcoolicas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (bebidasAlcoolicas === "cervejaComOuSemAlcool") {
    energia = 0.4319 * quantidadeBebidasAlcoolicas
    proteina = 0.0046 * quantidadeBebidasAlcoolicas
    lipidios = 0 * quantidadeBebidasAlcoolicas
    carboidrato = 0.0357 * quantidadeBebidasAlcoolicas
    fibra = 0 * quantidadeBebidasAlcoolicas
    agSaturados = 0 * quantidadeBebidasAlcoolicas
    acucarTotal = 0 * quantidadeBebidasAlcoolicas
    acucarDeAdicao = 0 * quantidadeBebidasAlcoolicas
    ferro = 0.0002 * quantidadeBebidasAlcoolicas
    sodio = 0.0402 * quantidadeBebidasAlcoolicas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield17").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield17").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield17").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield17").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield17").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield17").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield17").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield17").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield17").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield17").textContent = sodio.toFixed(2) + " mg";
}

function calcularOleosGorduras() {
  // Obter valores selecionados pelo usuário
  let oleosGorduras = document.getElementById("oleosGorduras").value;
  let quantidadeOleosGorduras = parseFloat(document.getElementById("quantidadeOleosGorduras").value);

  // Fazer o cálculo com base nos valores selecionados
  if (oleosGorduras === "azeiteDeOliva") {
    energia = 8.8781 * quantidadeOleosGorduras
    proteina = 0 * quantidadeOleosGorduras
    lipidios = 1.0043 * quantidadeOleosGorduras
    carboidrato = 0 * quantidadeOleosGorduras
    fibra = 0 * quantidadeOleosGorduras
    agSaturados = 0.1387 * quantidadeOleosGorduras
    acucarTotal = 0 * quantidadeOleosGorduras
    acucarDeAdicao = 0 * quantidadeOleosGorduras
    ferro = 0.0056 * quantidadeOleosGorduras
    sodio = 0.0201 * quantidadeOleosGorduras
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield18").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield18").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield18").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield18").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield18").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield18").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield18").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield18").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield18").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield18").textContent = sodio.toFixed(2) + " mg";
}

function calcularMiscelaneas() {
  // Obter valores selecionados pelo usuário
  let miscelaneas = document.getElementById("miscelaneas").value;
  let quantidadeMiscelaneas = parseFloat(document.getElementById("quantidadeMiscelaneas").value);

  // Fazer o cálculo com base nos valores selecionados
  if (miscelaneas === "salgadinho") {
    energia = 2.746 * quantidadeMiscelaneas
    proteina = 0.1341 * quantidadeMiscelaneas
    lipidios = 0.1688 * quantidadeMiscelaneas
    carboidrato = 0.1654 * quantidadeMiscelaneas
    fibra = 0.0088 * quantidadeMiscelaneas
    agSaturados = 0.0461 * quantidadeMiscelaneas
    acucarTotal = 0.0268 * quantidadeMiscelaneas
    acucarDeAdicao = 0.0182 * quantidadeMiscelaneas
    ferro = 0.0205 * quantidadeMiscelaneas
    sodio = 1.6516 * quantidadeMiscelaneas
  }

  // Exibir resultados na página
  document.getElementById("resultadoEnergiafield19").textContent = energia.toFixed(2) + " kcal";
  document.getElementById("resultadoProteinafield19").textContent = proteina.toFixed(2) + " g";
  document.getElementById("resultadoLipidiosfield19").textContent = lipidios.toFixed(2) + " g";
  document.getElementById("resultadoCarboidratofield19").textContent = carboidrato.toFixed(2) + " g";
  document.getElementById("resultadoFibrafield19").textContent = fibra.toFixed(2) + " g";
  document.getElementById("resultadoAGSaturadosfield19").textContent = agSaturados.toFixed(2) + " g";
  document.getElementById("resultadoAcucarTotalfield19").textContent = acucarTotal.toFixed(2) + " g";
  document.getElementById("resultadoAcucarDeAdicaofield19").textContent = acucarDeAdicao.toFixed(2) + " g";
  document.getElementById("resultadoFerrofield19").textContent = ferro.toFixed(2) + " mg";
  document.getElementById("resultadoSodiofield19").textContent = sodio.toFixed(2) + " mg";
}