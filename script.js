const students = [
  {
    name: "Luiz",
    grade1: 7,
    grade2: 8,
  },
  {
    name: "Alexandra",
    grade1: 8,
    grade2: 6,
  },
  {
    name: "Carlos",
    grade1: 6,
    grade2: 7,
  },
]

for (let student of students) {
  printResult(student)
}

function printResult(student) {
  var average = calculateAverage(student.grade1, student.grade2)

  if (average >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name} você foi aprovado(a) no concurso`)
  }
  else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi desta vez, ${student.name}! tente novamente`)
  }
}

function calculateAverage(grade1, grade2) {
  let average = (Number(grade1) + Number(grade2)) / 2

  return average.toFixed(2)
}
