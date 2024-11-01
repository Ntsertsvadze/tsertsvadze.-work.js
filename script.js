// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის სახელს.


const users = [{ name: 'Temo', age: 25 }, { name: 'Lasha', age: 21 }, { name: 'Ana', age: 28 }];
const getYoungestUser= function(users) {
    if (users.length === 0) {
        return null; 
    }

    let youngest = users[0]; 
    for (let user of users) {
        if (user.age < youngest.age) {
            youngest = user; 
        }
    }
    return youngest.name; 
}
console.log(getYoungestUser(users))  //Lasha



// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს
// იგივე მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

const origin=['James', 'Bond', '007']
const clone = origin.map (function(user){
    return user;
})
console.log(origin)  //(3) ['James', 'Bond', '007']
console.log(clone)   //(3) ['James', 'Bond', '007']



// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს
// მანამ, სანამ არ გაგორდება, რომელიც
// უფრო ნაკლებ ცდაში გააგორებს ოთხიანს ის
// არის გამარჯვებული

function rollDie() {
    return parseInt(Math.random()*6) + 1
}

function playGame() {
    let rollsA = 0;
    let rollsB = 0;
    let resultA, resultB;

    do {
        resultA = rollDie();
        rollsA++;
        console.log(`User A rolled: ${resultA}`);

        if (resultA === 4) {
            console.log(`User A wins in ${rollsA} rolls!`);
            return;
        }

        resultB = rollDie();
        rollsB++;
        console.log(`User B rolled: ${resultB}`);

        if (resultB === 4) {
            console.log(`User B wins in ${rollsB} rolls!`);
            return;
        }

    } while (resultA !== 4 && resultB !== 4);

    if (rollsA < rollsB) {
        console.log(`User A wins with ${rollsA} rolls!`);
    } else if (rollsB < rollsA) {
        console.log(`User B wins with ${rollsB} rolls!`);
    } else {
        console.log("It's a tie!");
    }
}

playGame();      //მაგალითდ:
//  User A rolled: 3
//  User B rolled: 5
//  User A rolled: 3
//  User B rolled: 5
//  User A rolled: 3
//  User B rolled: 5
//  User A rolled: 4
//  User A wins in 4 rolls!

//  User A rolled: 5
//  User B rolled: 3
//  User A rolled: 2
//  User B rolled: 5
//  User A rolled: 6
//  User B rolled: 3
//  User A rolled: 1
//  User B rolled: 1
//  User A rolled: 6
//  User B rolled: 3
//  User A rolled: 5
//  User B rolled: 2
//  User A rolled: 5
//  User B rolled: 5
//  User A rolled: 3
//  User B rolled: 6
//  User A rolled: 1
//  User B rolled: 2
//  User A rolled: 2
//  User B rolled: 5
//  User A rolled: 5
//  User B rolled: 4
//  User B wins in 11 rolls!
