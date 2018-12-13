'use strict';

const fs = require('fs');

let student = {  
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};

let data = JSON.stringify(student, null, '\t');  
fs.writeFileSync('student-2.json', data);  