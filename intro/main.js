console.log("hello world");
console.log("altro bellissimo consolo log ");
console.log(typeof 2);
console.log(typeof "hello");
console.log(typeof true);

console.log("Somma", 5 + 7);
console.log("sottrazione", 5 - 7);
console.log("divisione", 5 / 7);
console.log("prodotto", 5 * 7);
console.log("potenza", 2 ** 5);

console.log("modulo", 5 % 2);

console.log(Math.floor(8 / 3));
console.log(Math.round(8 / 3));
console.log(Math.fround(8 / 3));

// strings
console.log("234");
console.log("io sono una stringa");
console.log("io sono una stringa");
console.log("io sono una 'stringa' ");
console.log('"l\'apostrofo" è importante');
console.log("\n\\n andata a capo");

console.log(`questa è la somma di 5 + 7: ${5 + 7}`);
console.log("questa è la prima stringa" + " invece questa è la seconda");

// booleans
console.log("vero", true);
console.log("falso", false);

// not
console.log("not true diventa falso", !true);
console.log("not false diventa true", !false);

// and
console.log("true and true", true && true);
console.log("true and false", true && false);
console.log("false and false", false && false);
console.log("false and true", false && true);

// or
console.log("true and true", true || true);
console.log("true and false", true || false);
console.log("false and false", false || false);
console.log("false and true", false || true);

// null - undifind
console.log(typeof null);
console.log(typeof undefined);

// ===, ==, !=, <, >, <=, >=
console.log('==: 2 == "2"', 2 == "2", "vero");
console.log('===: 2 == "2"', 2 === "2", "falso");
console.log(" !=: 5 != 6", 5 != 6);
console.log("<: 0 < 2", 0 < 2);
console.log(">: 2 > 0", 2 > 0);
console.log("=<: 2 =< 2 ", 2 <= 2);
console.log(">=: 8 >= 5", 8 >= 5);

console.log("this" !== "that");
console.log(5 !== "5");
console.log(5 != "5");

console.log("a > b", "a" < "b");
console.log("this" > "that");

// short circuit operator 
const qui = 5 ?? 6
console.log(qui)

const qui2 = false ?? 6
console.log(qui2)

const qui3 = undefined ?? 6
console.log(qui3)

const quo = (5 > 4) ? 10 : 20
