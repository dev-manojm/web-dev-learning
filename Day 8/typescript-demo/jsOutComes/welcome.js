// function somefunc(name='Manoj') {
//     console.log(`Hello ${name}`)
// }
// somefunc()
var person = {
    name: 'Manoj',
    age: 21
};
var defaultPerson = {
    name: 'Manoj M',
    age: 22
};
function welcomeUser(name) {
    if (name === void 0) { name = defaultPerson; }
    console.log(name.name + "  " + name.age);
}
welcomeUser();
