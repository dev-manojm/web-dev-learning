// function demo() {
//     var x = parseInt(prompt("Enter a Value", "0"), 10);
//     var y = parseInt(prompt("Enter a Value", "0"), 10);
   
//     add=x+y
//     alert("Addiion is " + add)
    
// }

// var emp =new Object()
// emp.id=12345
// emp.name="shruti"
// employee={
//     id: 123,
//     name:"Manoj ",
//     salary: 17542
// }
// document.write(emp.id)

// function emp(id, name, city, salary){
//     this.id=id
//     this.name=name
//     this.salary=salary
//     this.city=city
//     this.changeSalary=changeSalary
//     this.changeName=changeName
//     this.changeCity=changeCity

//     function changeSalary(salary){
//         this.salary=salary
//         alert("Changed Salary")
//         document.getElementById("salary").innerHTML = this.salary;
//     }
//     function changeName(name){
//         this.name= name
//         alert("Changed Name")
//         document.getElementById("name").innerHTML = this.name;
//     }
//     function changeCity(city){
//         this.city= city
//         alert("Changed City")
//         document.getElementById("city").innerHTML = this.city;
//     }
// }

// e = new emp(101,"Manoj","Aurangabad", 23000 )

// console.log(e.name, e.salary, e.city)



var emp=['admin', 'manager', 'supervisor']

for(i=0; i<emp.length; i++){
    document.write(emp[i])
}