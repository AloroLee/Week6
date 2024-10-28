
const monsters = [
    {name: "Frank Monster"},
    {name: "The Mummy"},
    {name: "vlad the Impaler (Dracula)"}
];

function getMonster(m, i){
    // `<div id="1">The Mummy</div>`
    return`<div id="${i}">${m.name}</div>`
}

// .map()
console.log(monsters.map(getMonster));


