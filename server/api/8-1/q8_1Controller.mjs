const getSample1 = (req, res) => {
    res.send(
        JSON.stringify({
            id: req.query.id,
            message: "メッセージを取得します",
         }),
    )
}

export const q8_1Controller = {
    getSample1,
   }