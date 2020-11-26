class ClassDiscipline {
    constructor(limit) {
        this.students = []
        this.limit = limit;
    }
    registration(student) {
        if (this.limit > 0) {
            this.students.push(student);
            this.limit--;
            return "Matriculado com sucesso";
        } else {
            return "Não foi matriculado, turma sem vagas";
        }
    }
    percentageApproved() {
        let aproveds = this.students.filter(el => el.average > 7);
        let percentage = (aproveds.length*100) / this.students.length;
        return Math.round(percentage,1) ;
    }
}

module.exports = {
    ClassDiscipline,
}