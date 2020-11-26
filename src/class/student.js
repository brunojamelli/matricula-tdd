class Student {
    constructor(name, birthYear, notes = [], weights = []) {
        this.name = name;
        this.birthYear = birthYear;
        this.notes = notes;
        this.weights = weights;
        this.average = ((this.notes[0] * this.weights[0]) + (this.notes[1] * this.weights[1]) + (this.notes[2] * this.weights[2])) / this.weights.reduce((a, b) => a + b, 0);
    }
    weightedAverage() {
        return (this.average >= 7) ? "aprovado" : "reprovado";
    }
    
}
module.exports = {
    Student
}
