

const map=new Map();
map.set("rollNumber",10);
map.set("city","LA");
map.set("age",22);
map.set("rollNumber",30);
map.set("luckyNum",22);
console.log(map);

console.log(map.get("age"));
console.log(map.get("city"));

console.log(map.has("age"));
console.log(map.has("name"));

console.log(map.size);
console.log(map.keys());
console.log(map.values());

console.log(`Traversing Map`);
for (const keysVal of map) {
    console.log(keysVal[0],keysVal[1]);
}