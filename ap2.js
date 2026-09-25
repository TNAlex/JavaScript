let adunare = (a, b) => a + b;

// console.log("Suma dintre 24 si 36 este", adunare(24, 36));

console.log(process.argv);

var sum = 0
for (i = 2; i <process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum);
console.log(`Suma dintre ${process.argv[2]} si ${process.argv[3]} este ${sum}`);