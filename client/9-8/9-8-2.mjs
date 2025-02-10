let viewRecords = []
const loadRecords = async () => {
const fetchResult = await fetch("http://localhost:3000/api/sample2", {
method: "GET",
headers: {
"Content-Type": "application/json",
},
})
const responsce = await fetchResult.json()
if (responsce.status !== "success") {
alert("Error!")
return
}
viewRecords = responsce.list
}
const viewTable = () => {
const q9_8_2Body = document.getElementById("q9_8_2body")
q9_8_2Body.innerHTML = ""
for (const record of viewRecords) {
        const tr = document.createElement("tr")
        q9_8_2Body.appendChild(tr)
        const idTd = document.createElement("td")
        idTd.appendChild(document.createTextNode(record.id))
        tr.appendChild(idTd)
        const nameTd = document.createElement("td")
        nameTd.appendChild(document.createTextNode(record.name))
        tr.appendChild(nameTd)
        const ageTd = document.createElement("td")
        ageTd.appendChild(document.createTextNode(record.age))
        tr.appendChild(ageTd)
        const postcodeTd = document.createElement("td")
        postcodeTd.appendChild(document.createTextNode(record.postcode))
        tr.appendChild(postcodeTd)
        const addressTd = document.createElement("td")
        addressTd.appendChild(document.createTextNode(record.address))
        tr.appendChild(addressTd)
        const averagescoreTd = document.createElement("td")
        averagescoreTd.appendChild(document.createTextNode(record.averagescore))
        tr.appendChild(averagescoreTd)
    }
}
/**
* ウィンドウ読み込み時の処理
*/
window.onload = () => {
const loadButtonElement = document.getElementById("load-button")
loadButtonElement.addEventListener(
"click",
async () => {
await loadRecords()
viewTable()
},
false,
)
viewTable()
}