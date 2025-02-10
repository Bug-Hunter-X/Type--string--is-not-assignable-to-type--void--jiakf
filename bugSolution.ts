function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
  return 'Hello, ' + person;
}

let message = greet('John Doe', new Date());
console.log(message);