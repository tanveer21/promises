const words = [ 'trainee' ,'student' , 'principal' , 'applicant' , 'intern']
//const words = ''


const makeAllCaps = (words) => {
p = new Promise( (resolve, reject) => {

if(!words) reject('error occurred')
resolve(words.pop()) // returns last element
})
return p;
}

const sortWords = (words) => {
p = new Promise( (resolve, reject) => {
if(!words) reject('error occurred')
resolve(words.toUpperCase()) //uppercase
})
return p;
}

//chaining promises
makeAllCaps(words).then(sortWords)
.then(result => console.log(result))
.catch(error => console.log(error))