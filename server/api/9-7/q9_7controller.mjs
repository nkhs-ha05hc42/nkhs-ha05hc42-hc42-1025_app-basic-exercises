import { q9_7Model } from "./q9_7model.mjs"
const postq9_7 = async (req, res) => {
 const id = req.body.id
 const user_id = req.body.user_id
 const year = req.body.year
 const month = req.body.month
 const day = req.body.day
 const name = req.body.name
 const score = req.body.score
 if (!id || !user_id || !year || !month || !day || !name || !score) {
 return res.send(JSON.stringify({ status: "error" }))
 }
 const result = await q9_7Model.insertTwo(id, user_id, year, month, day, name, score)
 res.send(JSON.stringify({ status: "success", data: result }))
}

const getTwoq9_7 = async (req, res) => {
    const id = req.params.id
    if (!id) {
    return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await q9_7Model.selectTwo(id)
    if (!result) {
    return res.send(JSON.stringify({ status: "not found" }))
    }
    res.send(JSON.stringify({ status: "success", data: result }))
   }
   const getAllq9_7 = async (req, res) => {
    const result = await q9_7Model.selectAll()
    res.send(JSON.stringify({ status: "success", list: result }))
   }

   const putq9_7 = async (req, res) => {
    const id = req.params.id
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const name = req.body.name
    const score = req.body.score
    if (!user_id || !year || !month || !day || !name || !score) {
    return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await q9_7Model.updateTwo(id, user_id, year, month, day, name, score)
    if (!result) {
    return res.send(JSON.stringify({ status: "not found" }))
    }
    res.send(JSON.stringify({ status: "success", data: result }))
   }

   const deleteq9_7 = async (req, res) => {
    const id = req.params.id
    if (!id) {
    return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await q9_7Model.deleteTwo(id)
    if (!result) {
    return res.send(JSON.stringify({ status: "not found" }))
    }
    res.send(JSON.stringify({ status: "success", data: result }))
   }
   
export const q9_7controller = {
 postq9_7,
 getTwoq9_7,
 getAllq9_7,
 putq9_7,
 deleteq9_7,
}
