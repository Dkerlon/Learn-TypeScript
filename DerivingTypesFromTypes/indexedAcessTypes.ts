// let user = {
//     name:'Kerlon',
//     age:19,
//     skills:[{
//         name:'FrontEnd',
//         years:5
//     }]
// }

// type User = typeof user;

type AppUser = {
    name: string,
    age: number,
    skills: {
        name: string,
        years: number,
    }[]
};

type Skills = AppUser['skills']; 
type Skill = Skills[number];

