let favBooksFirst = 'The Alchemist';
const favBooksSecond = 'The Secret';

let concatBooks = `${favBooksFirst} + ${favBooksSecond}`;
console.log(concatBooks);

const otherConcatBooks = favBooksFirst + ' ' + favBooksSecond;
console.log(otherConcatBooks);

// Dynamic Data Types Object

const biodata = {
    name: 'Adli',
    weight: 60,
    height: 170
}

console.log(biodata);
console.log(biodata.name);
console.log(biodata.weight);
console.log(biodata.height);
console.log(`Hello my name is ${biodata.name}, I'm ${biodata.height} cm tall and my weight is ${biodata.weight} kg.`)


// Destructuring Object

const {name, weight, height} = biodata;
console.log(name);
console.log(weight);
console.log(height);

const {name:nama, weight:beratBadan} = biodata;
console.log(beratBadan);

const greeter = {
    message: 'Hello',
    times: 4
};

greeter.message = 'Say hi instead';
console.log(greeter.message);

// Dynamic Data Types Array

const adliObesity = [60, 170, false];
console.log(adliObesity);
console.log(adliObesity[0]);
console.log(adliObesity[1]);
console.log(adliObesity[2]);
console.log(typeof adliObesity);

// Destructuring Array
const [berat,,obesitas ] = adliObesity;
console.log(obesitas);

adliObesity[0] = 58;
console.log(adliObesity[0]);

let string = "!onaiP"
string = [...string].reverse().join("");

console.log(string);