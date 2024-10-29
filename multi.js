let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

// teamMembers.forEach((t, i) => t.forEach(m => console.log((i + 1, m)));

teamMembers.forEach(team => team.sort());

teamMembers.forEach((team, i) => team.forEach(member => console.log(`Team ${i + 1}: ${member}`)));

//simple - one liner
teamMembers.forEach((t, i) => console.log("Team", i+1, t.join(", ")));

//generic for re-use in utils.js
const commas = list => list.join(", ");
const print = text => console.log(text);

///special - only one purpose in teams.js
const team = (roster, index) => `Team ${index + 1} - (${roster})`;

// put it all together in app.js
teamMembers.map(commas).map(team).forEach(print);

// 2 dimensional matrix
// 3 dimensional cube
// N>3 dimensional tensor
