import express from 'express'
import {showSoldiers, createSoldier, getOneSoldier, updateSoldier, deleteSoldier, updateStatus} from './ctrl.js'
import {validateBody} from './middleware.js'

const router = express.Router()

router.post("/", createSoldier)

router.get("/", showSoldiers)

router.get("/:id", getOneSoldier)

router.put("/:id", updateSoldier)

router.delete("/:id", deleteSoldier)

router.patch("/:id/status", updateStatus)

export default router