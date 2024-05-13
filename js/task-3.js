class StringBuilder {
  #value; // Приватна властивість value

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value; // Повертає поточне значення value
  }

  padEnd(str) {
    this.#value += str; // Додає str в кінець value
    return this; // Повертає об'єкт StringBuilder для ланцюжкового виклику
  }

  padStart(str) {
    this.#value = str + this.#value; // Додає str на початок value
    return this; // Повертає об'єкт StringBuilder для ланцюжкового виклику
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Додає str на початок і кінець value
    return this; // Повертає об'єкт StringBuilder для ланцюжкового виклику
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="