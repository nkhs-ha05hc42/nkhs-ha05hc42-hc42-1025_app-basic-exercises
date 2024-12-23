const map6_6_4 = new Map()
map6_6_4.set("A","カレー")
map6_6_4.set("B","定食")
map6_6_4.delete("A")
for(const [key, value] of map6_6_4){
    console.log(map6_6_4.get(key))
    console.log(map6_6_4.has(key))
    console.log(map6_6_4.get(value))
    console.log(map6_6_4.has(value))
}