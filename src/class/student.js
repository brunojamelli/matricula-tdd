class Student {
    constructor(name, birthYear) {
        this.name = name,
        this.birthYear = birthYear
    }
    weightedAverage(notes, weights){
        const average = ((notes[0] * weights[0]) + (notes[1] * weights[1]) + (notes[2] * weights[2])) / weights.reduce((a, b) => a + b, 0);
        return (average >= 7) ? "aprovado" : "reprovado";
    }
}
module.exports = {
    Student
}
