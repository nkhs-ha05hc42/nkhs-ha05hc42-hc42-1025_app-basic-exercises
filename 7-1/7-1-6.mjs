const baini = (num) => {
    if(num > 100)return
        baini(num * 2)
        console.log(num)
}
baini(10)
baini(25)