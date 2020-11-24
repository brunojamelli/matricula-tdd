class ClassDiscipline {
    constructor() {
        this.students = []
    }
    registration(student) {
        this.students.push(student);
        return "a"
    }
}

module.exports = {
    ClassDiscipline,
}