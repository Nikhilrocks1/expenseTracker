
class Student{
    static count=0;
    
    constructor(name,age,phone,marks){
    
    this.name=name;
    
    this.age=age;
    
    this.phone=phone;
    
    this.marks=marks;
    
    Student.count_Students();    
    }
   
    static count_Students(){
        return Student.count++;
    }
   eligible(com_marks){
       return (com_age)=>{
             if(this.marks>com_marks && this.age>com_age){
                console.log(true);
                console.log(this.name);
             }
             else{
                console.log(false);
             }
       }
   }
 }
    
    
    
    const ram=new Student("ram",20,1234,75);
    
    const shyam=new Student("shyam",35,1234,80);
    
    const balram=new Student("balram",19,1234,35);
    
    const bharat=new Student("bharat",27,1234,65);
    
    const laxman=new Student("laxman",10,1234,38);
    
    console.log(Student.count_Students());
      
  ram.eligible(70)(21);
  shyam.eligible(70)(21);
  balram.eligible(70)(21);
  bharat.eligible(70)(21);
  laxman.eligible(70)(21);

      