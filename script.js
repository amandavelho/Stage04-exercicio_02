
const students = [
    { name: "Ana Silveira", resultFirstTest:5, resultSecondTest:9},
    { name: "Marcos Afonso", resultFirstTest:9, resultSecondTest:6},
    { name: "Carlos Oliveira", resultFirstTest:3, resultSecondTest:2},
    { name: "Valdomiro Velho", resultFirstTest:4, resultSecondTest:8},
    { name: "Leda Porfírio", resultFirstTest:6, resultSecondTest:7}
]


function mediaNota(nota1, nota2){
    const resultado = (nota1 + nota2) / 2
    return resultado 
}

for (const student of students) {
    let media = mediaNota(student.resultFirstTest,student.resultSecondTest)
    let status = ""

    if (media>=7) {
        status = `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` 
    } else {
        status = `Não foi dessa vez, ${student.name}! Tente novamente!`
    }
          
    
    alert(`A media do(a) aluno(a) ${student.name} é: ${media}\n${status}`)

}