class ClassDiscipline {

    constructor(limit) {
        this.students = []
        this.limit = limit;
    }
    registration(student) {
        this.students.push(student);
        return "Matriculado com sucesso"
    }
}

module.exports = {
    ClassDiscipline,
}