const moduleStudent = require('./student.js')
const moduleClassDiscipline = require('./class_discipline.js')


describe('Testes de matriculas na turma', () => {
    it('matricula na turma que ainda tem vagas', () => {
        const param = new moduleStudent.Student("John", 12);
        const turma = new moduleClassDiscipline.ClassDiscipline();

        expect(turma.registration(param)).toEqual("Matriculado com sucesso");
    })

    it('matricula na turma que não tem mais vagas', () => {
        const param = new moduleStudent.Student("John", 12);
        const turma = new moduleClassDiscipline.ClassDiscipline();
    
        expect(turma.registration(param)).toEqual("Não foi matriculado, turma sem vagas");
    })
})

describe('Testes de calculo de medias das notas dos alunos', () => {
    it('Alunos na media "aprovados com sucesso" ', () => {
        const aluno = new moduleStudent.Student("John", 12);
        const notes = [10,3,10];
        const weights = [4,5,6]
        expect(aluno.weightedAverage(notes,weights)).toEqual("aprovado");
        
    })
})