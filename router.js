import express from 'express'
import {showSoldiers} from './ctrl.js'

const router = express.Router()

// router.post("/")

router.get("/", showSoldiers)

// router.get("/:id")

// router.put("/:id")

// delete("/:id")

// patch("/:id/status")

export default router