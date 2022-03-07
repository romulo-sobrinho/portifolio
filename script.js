function funcionario(nome, salario) {
  return {
    nome,
    salario
  }
}

let empregados = [
  funcionario("Joao", 1300),
  funcionario("Ana", 5000),
  funcionario("Rômulo Sobrinho", 20000),
  funcionario("Samuel da Costa", 20000),
  funcionario("Maria das Dôres", 10000)
]

function empregadoCaro (empregado) {
  return empregado.salario > 5000;
}


let emp = empregados.filter(empregadoCaro);

console.log("Empregados que ganham mais que 5000");

for(let empregado of emp) {
  console.log(empregado.nome);
}
