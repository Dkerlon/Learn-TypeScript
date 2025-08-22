enum Role {
    admin = 1,
    editor,
    guest = 'guest'
}; 

type days = 'monday' | `sunday` | `tuesday`;
type User = {
    name: string,
    age:number,
    id: string | number,
    courses: string[]
};

let useRole: Role = Role.admin; //1
let useRole2: Role = 1; // admin/ 1
let useRole3: Role = Role.guest; // guest

let days: 'monday' | `sunday`;

days = 'monday';

let possibleResultss: [1,-1] = [1,-1];

function getDays(day: days){};