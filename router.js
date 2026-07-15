import express from 'express'
import {showSoldiers, createSoldier, getOneSoldier, updateSoldier, deleteSoldier, updateStatus} from './ctrl.js'
import {validateBody, validId} from './middleware.js'

const router = express.Router()

router.post("/",validateBody, createSoldier)

router.get("/", showSoldiers)

router.get("/:id",validId, getOneSoldier)

router.put("/:id",validId, validateBody, updateSoldier)

router.delete("/:id",validId, deleteSoldier)

router.patch("/:id/status",validId, updateStatus)

export default router