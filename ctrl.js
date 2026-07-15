import { getSoldiers, addSoldier } from './service.js'

export async function showSoldiers(req, res, next) {
    try {
        const filters = req.query;
        const result = await getSoldiers(filters);
        if (!result) return res.status(400).json({message: "failed to get soldieres"})
        return res.json({ data: result });
    } catch (e) {
        next(e);
    }
}

export async function createSoldier(req, res, next) {
    try {
        const soldier = req.body
        const result = await addSoldier(soldier)
        if (!result) return res.status(400).json({message: "failed to create soldier"})
        return res.status(201).json({ data: result })
    } catch (e) {
        next(e)
    }
}