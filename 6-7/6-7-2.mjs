const values = ["A", "A", "A", "B", "C", "D"]
const valuesSet = new Set(values)

const valuesArray = Array.from(valuesSet)

for (let i = 0; i < 3; i++) {
    console.log(valuesArray[i])
}
