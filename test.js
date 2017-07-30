function Person(name) {
    this.name = name;
    this.sex = 'nan';
}
Person.prototype.school = 'jinshan';
var p1 = new Person('wangbing');
console.log(p1.valueOf());