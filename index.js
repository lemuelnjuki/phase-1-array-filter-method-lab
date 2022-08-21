// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (drivers,str){
    return drivers.filter(drivers => drivers.toUpperCase() === str.toUpperCase())
};
function fuzzyMatch(drivers, string) {
    const length = string.length;
    const fuzzyMatch = drivers.filter(a => a.slice(0, length) === string);
    return fuzzyMatch;
};
function matchName(drivers, str) {
    return drivers.filter(drivers => drivers.name === str)
} 







