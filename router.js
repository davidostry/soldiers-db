import express from 'express'
import {showSoldiers, createSoldier} from './ctrl.js'
import {validateBody} from './middleware.js'

const router = express.Router()

router.post("/", (req, res, next) => {
    console.log("route reached");
    next();
}, createSoldier);

router.post("/", validateBody, createSoldier)

router.get("/", showSoldiers)

// router.get("/:id")

// router.put("/:id")

// delete("/:id")

// patch("/:id/status")

export default router