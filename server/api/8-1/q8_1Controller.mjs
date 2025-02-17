const postq8_1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
   }
   
const getq8_1 = (req, res) => {
    res.send(
        JSON.stringify({
            id: req.query.id,
            message: "メッセージを取得します",
         }),
    )
}

const putq8_1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
   }
   
   const deleteq8_1 = (req, res) => {
    res.send(JSON.stringify({ status: "success", id: req.query.id }))
   }

export const q8_1Controller = {
    getq8_1,
    postq8_1,
    putq8_1,
    deleteq8_1,
   }