const king  = {name:'Sikder', age:55, kingdom:'BD'};

// freeze korle delete, add, modify kisu kora jayna
// Object.freeze(king);

// seal korle values update kora jay but onno kisu kora jayna
Object.seal(king);

delete king.age;
delete king.kingdom;
king.queen = 'abc';
king.name = 'xyz';
console.log(king);