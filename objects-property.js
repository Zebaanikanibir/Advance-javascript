


const students = [

{id: 21, name: 'nibir'},
{id: 22, name: 'namnji'},
{id: 23, name: 'nibir2'},
{id: 24, name: 'nibir3'}

];
const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id>22)
const bigger1 = students.find(s => s.id>22)

console.log(bigger1);



