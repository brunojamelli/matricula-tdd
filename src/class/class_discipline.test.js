const moduleStudent = require('./student.js')
const moduleClassDiscipline = require('./class_discipline.js')

describe('Testes de matriculas na turma', () => {
    it('matricula na turma que ainda tem vagas', () => {
        const param = new moduleStudent.Student("John", 2008);
        const turma = new moduleClassDiscipline.ClassDiscipline(20);

        expect(turma.registration(param)).toEqual("Matriculado com sucesso");
    })

    it('matricula na turma que não tem mais vagas', () => {
        const obj1 = new moduleStudent.Student("John", 2000);
        const obj2 = new moduleStudent.Student("Stuart", 2001);
        const obj3 = new moduleStudent.Student("Conoly", 2002);
        const obj4 = new moduleStudent.Student("Bruno", 1997);

        const turma = new moduleClassDiscipline.ClassDiscipline(3);
        turma.registration(obj1);
        turma.registration(obj2);
        turma.registration(obj3);

        expect(turma.registration(obj4)).toEqual("Não foi matriculado, turma sem vagas");
    })
})

describe('Testes de calculo de medias das notas dos alunos', () => {
    it('Media > 7, deve retornar aprovado', () => {
        const notes = [10, 3, 10];
        const weights = [4, 5, 6];
        const aluno = new moduleStudent.Student("John", 2000, notes, weights);
        expect(aluno.weightedAverage(notes, weights)).toEqual("aprovado");
    })

    it('Media <=7, deve retornar reprovado', () => {
        const notes = [10, 3, 3];
        const weights = [4, 5, 6];
        const aluno = new moduleStudent.Student("John", 2000, notes, weights);
        expect(aluno.weightedAverage(notes, weights)).toEqual("reprovado");
    })
})

describe('Testes calculo de porcentagem de aprovados na Turma', () => {
    it('Deve retornar 25% de aprovação', () => {
        let weights = [4, 5, 6];
        let notes1 = [10, 8, 10];
        let notes2 = [5, 5, 3];
        let notes3 = [7, 7, 2];
        let notes4 = [8, 7, 1];
        let obj1 = new moduleStudent.Student("John", 2000, notes1, weights);
        let obj2 = new moduleStudent.Student("Stuart", 2001, notes2, weights);
        let obj3 = new moduleStudent.Student("Conoly", 2002, notes3, weights);
        let obj4 = new moduleStudent.Student("Bruno", 1997, notes4, weights);
        const turma = new moduleClassDiscipline.ClassDiscipline(4);
        turma.registration(obj1);
        turma.registration(obj2);
        turma.registration(obj3);
        turma.registration(obj4);
        //Testando a quantidade de alunos aprovados na turma
        expect(turma.percentageApproved()).toEqual(25.0);

    })

    it('Deve retornar 0% de aprovação', () => {
        let weights = [4, 5, 6];
        let notes1 = [10, 3, 1];
        let notes2 = [5, 5, 3];
        let obj1 = new moduleStudent.Student("John", 2000, notes1, weights);
        let obj2 = new moduleStudent.Student("Stuart", 2001, notes2, weights);
        const turma = new moduleClassDiscipline.ClassDiscipline(4);
        turma.registration(obj1);
        turma.registration(obj2);
        //Testando a quantidade de alunos aprovados na turma
        expect(turma.percentageApproved()).toEqual(0.0);
    })

    it('Deve retornar 100% de aprovação', () => {
        let weights = [4, 5, 6];
        let notes1 = [10, 10, 7];
        let notes2 = [6, 10, 10];
        let obj1 = new moduleStudent.Student("Leclerc", 2001, notes1, weights);
        let obj2 = new moduleStudent.Student("Vetel", 2003, notes2, weights);
        const turma = new moduleClassDiscipline.ClassDiscipline(4);
        turma.registration(obj1);
        turma.registration(obj2);
        //Testando a quantidade de alunos aprovados na turma
        expect(turma.percentageApproved()).toEqual(100.0);
    })
})