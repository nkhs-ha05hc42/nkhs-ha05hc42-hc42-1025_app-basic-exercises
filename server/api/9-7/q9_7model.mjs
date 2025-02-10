import { query } from "../../db/manager.mjs"
const insertTwo = async (id, user_id, year, month, day, name, score) => {
 const insertQuery = `
 INSERT INTO exams(
 id,
 user_id,
 year,
 month,
 day,
 name,
 score
 )
 VALUES(
 $1,
 $2,
 $3,
 $4,
 $5,
 $6,
 $7
 )
 RETURNING *;
 `
 const result = await query(insertQuery, [id, user_id, year, month, day, name, score])
 return result.rows.at(0)
}

const selectAll = async () => {
    const results = await query(`
    SELECT
    *
    FROM
    exams;
    `)
    return results.rows
   }
   const selectTwo = async (id) => {
    const selectQuery = `
    SELECT
    *
    FROM
    exams
    WHERE
    id = $1;
    `
    const results = await query(selectQuery, [id])
    return results.rows.at(0)
   }
   
   const updateTwo = async (id, user_id, year, month, day, name, score) => {
    const updateQuery = `
    UPDATE
    exams
    SET
    user_id = $2,
    year = $3,
    month = $4,
    day = $5,
    name = $6,
    score = $7
    WHERE
    id = $1
    RETURNING *;
    `
    const result = await query(updateQuery, [id, user_id, year, month, day, name, score])
    return result.rows.at(0)
   }
   
   const deleteTwo = async (id) => {
    const deleteQuery = `
    DELETE FROM
    exams
    WHERE
    id = $1
    RETURNING *;
    `
    const result = await query(deleteQuery, [id])
    return result.rows.at(0)
   }

export const q9_7Model = {
 insertTwo,
 selectAll,
 selectTwo,
 updateTwo,
 deleteTwo,
}
