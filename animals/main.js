let animals = [
    { type: "dog", sound: "woof" },
    { type: "cow", sound: "moo" },
    { type: "cat", sound: "meow" }
]

function animalsSound(name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].type == name) {
            console.log("What does the", animals[i].type, "say?", animals[i].type);
        }
    }
}

let a = prompt("ta ymar negen amitan oruulna uu");
animalsSound(a);