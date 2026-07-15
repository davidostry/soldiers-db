import { getSoldiers, addSoldier, getSoldier, updateDetailes, deleteById, changeStatus } from './service.js'

export async function showSoldiers(req, res, next) {
    try {
        const filters = req.query;
        const result = await getSoldiers(filters);
        if (!result) return res.status(400).json({ message: "failed to get soldiers" })
        return res.json({ data: result });
    } catch (e) {
        next(e);
    }
}

export async function createSoldier(req, res, next) {
    try {
        const soldier = req.body
        const result = await addSoldier(soldier)
        if (!result) return res.status(400).json({ message: "failed to create soldier" })
        return res.status(201).json({ data: result })
    } catch (e) {
        next(e)
    }
}

export async function getOneSoldier(req, res, next) {
    try {
        const { id } = req.params

        const result = await getSoldier(id)
        if (!result) return res.status(404).json({ message: "soldier not found" })
        return res.json({ data: result })

    } catch (e) {
        next(e)
    }
}

export async function updateSoldier(req, res, next) {
    try {
        const soldier = req.body
        const { id } = req.params
        console.log(soldier, id);

        const result = await updateDetailes(id, soldier)
        if (!result) return res.status(400).json({ message: "failed to update" })
        return res.json({ data: result })
    } catch (e) {
        next(e)
    }
}

export async function deleteSoldier(req, res, next) {
    try {
        const { id } = req.params
        console.log(id);

        const result = await deleteById(id)

        if (!result) return res.status(400).json({ message: "failed to delete" })
        return res.sendStatus(204)
    } catch (e) {
        next(e)
    }
}

export async function updateStatus(req, res, next) {
    try {
        const { id } = req.params
        const { service_status } = req.body
        console.log(id, service_status);

        const result = await changeStatus(id, service_status)
        if (!result) res.status(400).json({ message: "failed to update status" })
        return res.json({ data: result })
    } catch (e) {
        next(e)
    }
}