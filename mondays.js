
//var
const fruit = ["apple", "banana", "cherry"];
fruit.forEach(f => console.log(f));

function print(item){
    console.log(item);
}

fruit.forEach(print); //no () after function name

//no var
[999,444,443].forEach(n => console.log(n));

["apple", "banana", "cherry"].forEach((f,i,a) => console.log(i+1, f, a));

[11,14,16,25].forEach((n,i,a) => i ? console.log(n - a[i-1]): 0);