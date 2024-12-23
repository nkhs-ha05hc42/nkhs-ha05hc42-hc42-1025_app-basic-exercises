const objectArray6_6_5 = [
    {
    key: "A",
    value: "オレンジ",
    },
    {
    key: "B",
    value: "グレープ",
    },
    {
    key: "C",
    value: "パイナップル",
    }
]
const map6_6_5 = new Map(objectArray6_6_5.map(object => [object.key, object.value]))
for(const [key, value] of map6_6_5){
    console.log(key, value)
}