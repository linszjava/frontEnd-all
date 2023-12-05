function engine<T>(item :T) :T {
    return item;
}

console.log(engine('V8'));

console.log(engine<Number>(100));

