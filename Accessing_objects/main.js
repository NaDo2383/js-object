let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
    },
    {
    name: 'Индра',
    age: 19,
    gender: "female"
    },
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
    },
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
    },
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
    },
]

//task1
let male=0, female=0;
function countGender(){
    for(let i=0; i<students.length; i++){
        if("male"==students[i].gender){
            male++;
        }else if("female"==students[i].gender){
            female++;
        }
    }
    console.log("Niit", male, "eregtei suraltsagch", female, "emegtei suraltsagch baina");
}

countGender();


//task2 
let averageAge=0, SumAge=0;
function aAgeAverage(){
    for(let j=0; j<students.length; j++){
        SumAge=SumAge+students[j].age;
    }
    averageAge=SumAge/(students.length);
    console.log(averageAge);
}
aAgeAverage()

//task3
for(let k=0; k<students.length; k++){
    students[k].ovog=prompt( students[k].name, "suraltsagchiin ovgiig oruulna uu");
}

//task4 
let l=0;
let ijilNastai={};
for (let n=0; n<students.length; n++){
    for(let m=n+1; m<students.length; m++){
        if(students[n].age == students[m].age){
            ijilNastai. = students[m].age;
            l++
        }
        if(l!=0){
            ijilNastai.students[n].name = students[n].age;
        }
        l=0;
    }
}
