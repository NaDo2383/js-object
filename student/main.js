let students = [
    {
        name: "Gonchigsumlai",
        birthYear: 1999,
        hobby: "Horse",
        single: false
    },
    {
        name: "Taaldaa",
        birthYear: 2000,
        hobby: "sleep",
        single: true
    },
    {
        name: "Darga",
        birthYear: 2004,
        hobby: "sing",
        single: false
    },
    {
        name: "Huslen",
        birthYear: 2002,
        hobby: "soccer",
        single: false
    },
    {
        name: "Orgil",
        birthYear: 2002,
        hobby: "sleep",
        single: false
    },
    {
        name: "Amaraa",
        birthYear: 2005,
        hobby: "watching anime",
        single: true
    },
    {
        name: "Manlai",
        birthYear: 1999,
        hobby: "playing ukulele",
        single: true
    },
    {
        name: "Byamba",
        birthYear: 1990,
        hobby: "accounting",
        single: false
    },
    {
        name: "Taami",
        birthYear: 1999,
        hobby: "playing dota",
        single: false
    },
    {
        name: "Ganzoo",
        birthYear: 2004,
        hobby: "watching anime",
        single: true
    },
    {
        name: "Daria",
        birthYear: 2004,
        hobby: "reading",
        single: true
    },
    {
        name: "Jack",
        birthYear: 1999,
        hobby: "chess",
        single: false
    },
    {
        name: "Bqebe",
        birthYear: 2004,
        hobby: "sportmen ",
        single: true
    },
    {
        name: "Amaraa",
        birthYear: 1994,
        hobby: "making money",
        single: false
    },
    {
        name: "Dulguun",
        birthYear: 1997,
        hobby: "singing ",
        single: false
    },
    {
        name: "NaDo",
        birthYear: 1997,
        hobby: "reading book",
        single: true
    },
    {
        name: "Bilguun",
        birthYear: 1995,
        hobby: "taking pic",
        single: false
    },
    {
        name: "Muugii",
        birthYear: 1997,
        hobby: "soccer",
        single: true
    },
    {
        name: "Ochko",
        birthYear: 1997,
        hobby: "sleeping",
        single: false
    }
]
//task2
function above20() {
    for (let i = 0; i < students.length; i++) {
        if ((2022 - students[i].birthYear) >= 20) {
            console.log(students[i]);
        }
    }
}

//task3
function CalculateAge(name) {
    for (let i = 0; i < students.length; i++) {
        if (name == students[i].name) {
            console.log(2022 - students[i].birthYear);
        }
    }
}

//task4 
function FindSingle() {
    for (let i = 0; i < students.length; i++) {
        if (true == students[i].single) {
            console.log(students[i]);
        }
    }
}


