let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

// teamMembers.forEach((t, i) => t.forEach(m => console.log((i + 1, m)));

teamMembers.forEach(team => team.sort());

teamMembers.forEach((team, i) => team.forEach(member => console.log(`Team ${i + 1}: ${member}`)));
