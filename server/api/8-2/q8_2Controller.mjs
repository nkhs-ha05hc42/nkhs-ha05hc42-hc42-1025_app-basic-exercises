const getPathParamq8_2 = (req, res) => {
    res.send(
    JSON.stringify({
    id: req.query.id,
    message: "メッセージを取得します",
    }),
    )
   }

   export const q8_2Controller = {
    getPathParamq8_2,
   }