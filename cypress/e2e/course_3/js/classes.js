class Student
{

    constructor(sid,sname,grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }


    // setDetails(sid,sname,grade)
    // {
    //     this.sid=sid;
    //     this.sname=sname;
    //     this.grade=grade;
    // }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
     }
    
}

let stu=new Student(101,"John","A");
//stu.setDetails(101,"john","A");
stu. display();


let stu1=new Student(102,"David","A");
stu1.display();

let stu2=new Student(103,"Smith","B");
stu2.display()

let stu3=new Student(104,"Mary","C");
stu3.display()