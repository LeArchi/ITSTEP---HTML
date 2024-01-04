const Student = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
};

Student.prototype.addGrade = function(subject, grade) {
    if (grade >= 0 && grade <= 100) {
        this.grades[subject] = grade;
    } else {
        console.log(`Invalid grade ${grade} for subject ${subject}.`);
    }
};

Student.prototype.calculateGPA = function() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let subject in this.grades) {
        const grade = this.grades[subject];
        const credits = 1; 

        totalPoints += grade * credits;
        totalCredits += credits;
    }

    return totalPoints / totalCredits;
};

const student = new Student('John', 'Doe');

student.addGrade('Mathematics', 90);
student.addGrade('History', 85);
student.addGrade('Physics', 95);

console.log(`Student ${student.firstName} ${student.lastName}'s GPA is ${student.calculateGPA().toFixed(2)}`);