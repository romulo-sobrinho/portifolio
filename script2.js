function Aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;
}

let alunos = [
  new Aluno("Roberto", 3),
  new Aluno("João", 1),
  new Aluno("Ana", 9),
  new Aluno("Maria", 8)
]

function situacaoAluno(aluno) {
  return aluno.nota < 7
}

let al = alunos.filter(situacaoAluno);
console.log(al);

for(let aluno of alunos) {
  if(aluno.nota < 7) {
    aluno.situacao = "reprovado";
  }else {
    aluno.situacao = "aprovado"
  }
}

console.log(alunos);