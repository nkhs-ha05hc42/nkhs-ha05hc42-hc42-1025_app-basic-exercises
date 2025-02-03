const callbackA = () => {
    setTimeout(() => {
    console.log('★', new Date())
    setTimeout(() => {
    console.log('◆', new Date())
    setTimeout(() => {
    console.log('end', new Date())
    }, 5000)
    }, 3000)
    }, 2000)
   }
   console.log("start", new Date())
   callbackA()