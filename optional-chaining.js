const employee = {
    name: 'Sikder',
    1: 'desk one',
    'home-address': '123 Main St',
    salary: 50000,
    family:{
        father: 'Md. Abu Sufian Sikder',
        // mother:{
        //     name:'Most. Farida Pervin',
        //     age: 55,
        // },
    },
    position: 'Software Engineer'
};

console.log(employee.family?.mother?.age); 
//question mark mane jodi ager item ta thake taile dekhao, erpor na thakle undefined dekhaben