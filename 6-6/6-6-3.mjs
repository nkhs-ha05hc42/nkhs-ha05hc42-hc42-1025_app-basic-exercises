const map6_6_3 = new Map()
map6_6_3.set("A","カレー")
map6_6_3.set("B","定食")
for(const [key, value] of map6_6_3){
    console.log(map6_6_3.get(key))
    console.log(map6_6_3.has(key))
}