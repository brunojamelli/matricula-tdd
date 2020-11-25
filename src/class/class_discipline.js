class ClassDiscipline {

    constructor(limit) {
        this.students = []
        this.limit = limit;
    }
    registration(student) {
        this.limit--;
        if (this.limit > 0) {
            this.students.push(student);
            return "Matriculado com sucesso";
        }else {
            return "Não foi matriculado, turma sem vagas";
        }
    }
}

module.exports = {
    ClassDiscipline,
}