import express from "express"
import path from "path"
import {
    q9_7controller,
    sample1Controller,
    sample2Controller
 } from "./api/controllers.mjs"
import { q8_1Controller  } from "./api/8-1/q8_1Controller.mjs"
const routers = express.Router()
routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1", sample1Controller.getSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)

routers.post("/api/8-1",q8_1Controller.postq8_1)
routers.get("/api/8-1",q8_1Controller.getq8_1)
routers.put("/api/8-1",q8_1Controller.putq8_1)
routers.delete("/api/8-1",q8_1Controller.deleteq8_1)

routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)
routers.put("/api/sample2/:id", sample2Controller.putSample2)
routers.delete("/api/sample2/:id", sample2Controller.deleteSample2)

routers.post("/api/9-7", q9_7controller.postq9_7)
routers.get("/api/9-7/:id", q9_7controller.getTwoq9_7)
routers.get("/api/9-7", q9_7controller.getAllq9_7)
routers.put("/api/9-7/:id", q9_7controller.putq9_7)
routers.delete("/api/9-7/:id", q9_7controller.deleteq9_7)
// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))
export default routers