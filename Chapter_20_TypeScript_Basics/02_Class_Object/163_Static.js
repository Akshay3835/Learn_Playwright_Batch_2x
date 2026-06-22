class Student{
    constructor(name_student,age, phoneno){
        this.name_student = name_student;
        this.age = age;
        this.phoneno = phoneno;
    }

    static name = "Playwright2X";
    static mentor_name = "PramodDatta";

      static display() {
        console.log("Hi, I am commoin f(n)");
    }

}

const s1 = new Student("Akshay", 29, "9876543210");
const s2 = new Student("Srinija", 24, "8210910909");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.name);
console.log(Student.mentor_name);
