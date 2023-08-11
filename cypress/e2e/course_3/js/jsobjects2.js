let employee=
{
empname:"scott",
empid:1023,
job:"Engineer",
basicsal:50000,
bonus: function()
        {
           return((this.basicsal * 10)/100);
        }

};

//console.log(employee["empname"]);
console.log(employee.bonus());//5000