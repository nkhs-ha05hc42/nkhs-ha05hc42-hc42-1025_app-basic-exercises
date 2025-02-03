const tasu = (a, b) => {
    return a + b
}
const callbackA = () => {
    setTimeout(() => {
    console.log(tasu(3,4), new Date())
    setTimeout(() => {
    console.log('end', new Date())
    }, 2500)
    }, 2000)
}
   console.log("start", new Date())
   callbackA()