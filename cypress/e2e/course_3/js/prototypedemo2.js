class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.sal=50000;

Employee.prototype.display=function()
                            {
                                console.log(this.eid,this.ename,this.sal);
                            }


emp1obj=new Employee(101,"David");
emp1obj.display();

emp2obj=new Employee(102,"John");
emp2obj.display();
