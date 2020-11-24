const classDiscipline = require('./class_discipline.js')
const student = require('./student.js')
describe('Testes de matriculas na turma', () => {
    const notes=[2,3,5]
    expect(classDiscipline.registration(notes)).toEqual(10)
})