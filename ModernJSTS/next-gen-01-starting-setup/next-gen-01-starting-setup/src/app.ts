// Code goes here!

const hobbies = ['Sports','Cooking']
const activeHobbies = ['Play']

activeHobbies.push(...hobbies)

const person = {
    name : 'Kerlon',
    age: 19
}
const personCopy = {...person}


const add = (...num : number[]) => {
    num.reduce((currentResult,currentValue) => {
        return currentResult + currentValue
   }, 0)
}

console.log(add(1,2,3,4,5,6,7,8))

//Array/Object destructuring

const [hobbie1,hobbie2, ...remainingHobbies] = hobbies
const { name: personName, age } = person

console.log(age)
console.log(personName)