
//impure function
// function updateProfile(profile, city) {
//     profile.city = city
//     return profile
// }

//how to return immutable object
//1.old way 2.Using Object.assign method 3.Using spread Noation

//1.Old way: copy all object properties into new Object , update any necessary fields and return
// function updateProfile(profile, city) {
//     //new object
//     return {
//         name: profile.name,
//         city: city
//     }
// }

//Using Object.assign method
// function updateProfile(profile, city) {
//     //new object
//     return Object.assign({}, profile, { city: city })
// }

//Using es 7 spread Notation.
// function updateProfile(profile, city) {
//     //new object
//     return { ...profile, city: city }
// }
function updateProfile(profile, city) {
    //new object
    return { ...profile, city }
}
let profile = {
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('Before Update', profile)
let result = updateProfile(profile, 'Coimbatore')
//simple logic to test immutability
console.log(result === profile ? "Same Object" : "Different Object")
console.log('After update', profile)