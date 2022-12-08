const users = [
    {
        name: "Alex",
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
    },
    {
        name: "Job",
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    {
        name: "Brook",
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
    },
    {
        name: "Daniel",
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
    },
    {
        name: "John",
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    {
        name: "Thomas",
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
    },
    {
        name: "Paul",
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
    }
]
//task1 
let a = prompt("1-7 hoorond too oruulna uu");
console.log("tanii oruulsan toond hargalzah hereglegch bol", users[a]);

//task2
let b;
let maxc = 0;
for (let i = 0; i < users.length; i++) {
    let len = users[i].skills.length;
    if (maxc < len) {
        maxc = len;
        b = users[i];
    }
}
console.log("Hamgiin olon skill hereglegch bol", b);

//task3
let logInCount = 0, PointsAbove50 = 0;
for (let j = 0; j < users.length; j++) {
    if (users[j].isLoggedIn == true) {
        logInCount++;
    }
    if (users[j].points >= 50) {
        PointsAbove50++;
    }
}
console.log("Niit", logInCount, "hereglegch nevtersen baina", "50 bolon tuunees deesh onootoi hereglegch", PointsAbove50, " baina");

//task4 
let stake4l = 0;
for (let k = 0; k < users.length; k++) {
    if (users[k].skills.includes("MongoDB") && users[k].skills.includes("Express") && users[k].skills.includes("React") && users[k].skills.includes("Node")) {
        stake4l++;
    }
}
console.log(" MongoDB, Express, React, Node  4 heliig 4 uuleng n ezemshsen hereglegch niit", stake4l, "baina");


//task5 

for (let l=0; l<users.length; l++){
    for(let n=l+1; n<users.length; n++){
        if(users[l].age>users[n].age){
            let temp=users[n];
            users[n]=users[l];
            users[l]=temp;
        }
    }  
}
console.log("edgeer hereglegch naraas hamgiin ondor nastai hereglegch nar bol", users.slice(-3), "baina");