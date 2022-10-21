// const data = {

//     marks: 45,
//     name: 'saud khan',
//     gpa: 3.7,
//     ispass: true,
//     friends: ['abdus samad', 'abdul qadir', 'abdul samad'],
//     address: {
//         city: 'mardan',
//         country: 'pakistan',
//         tehsil: 'katlang',
//     }
// }
// console.log(data.friends[2])
const students = [
    {
             marks: 45,
             name: 'saud khan',
             gpa: 3.7,
             ispass: true,
             friends: ['abdus samad', 'abdul qadir', 'abdul samad'],
          address: {
                 city: 'mardan',
                 country: 'pakistan',
                 tehsil: 'katlang',
             }
         },
         {       marks: 55,
                 name: 'anees',
                 gpa: 3.2,
                 ispass: true,
                 friends: ['boy 1', 'boy 2', 'girl 1'],
                 address: {
                     city: 'kohat',
                     country: 'pakistan',
                     tehsil: 'kohat',
                 }
             },
            {
                     marks: 22,
                     name: 'insha allah',
                     gpa: 2.2,
                     ispass: false,
                     friends: ['kaleem', 'kashif', 'kashif'],
                     address: {
                         city: 'waziristan',
                         country: 'pakistan',
                         tehsil: 'south wazirsitan',
                     }
                },
]
const fail = marks.filter((n) => n < 30);


//   console.log(students[0].ispass ?? console.log(students));
//   console.log(students[0].address.city);
//  for(let i=0; i<marks.length; i++){
//      if(marks[i] < 30){
//          below.push(marks[i]);
//     }
         
//  }