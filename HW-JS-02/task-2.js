const Student = function () {
    this.subjects = [];
};

Student.prototype.addSubject = function (subject) {
    if (!this.subjects.includes(subject)) {
        this.subjects.push(subject);
        console.log(`${subject} subject added.`);
    } else {
        console.log(`You are already studying ${subject}.`);
    }
};

Student.prototype.removeSubject = function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
        this.subjects.splice(index, 1);
        console.log(`${subject} item deleted.`);
    } else {
        console.log(`You are not studying ${subject}.`);
    }
};

const student = new Student();

student.addSubject("Mathematics"); // Mathematics subject added.
student.addSubject("History"); // History subject added.
student.addSubject("Mathematics"); // You are already studying Mathematics.
console.log(student.subjects); // ["Mathematics", "History"]
student.removeSubject("History"); // History item deleted.
console.log(student.subjects); // ["Math"]
student.removeSubject("English"); // You are not studying English.