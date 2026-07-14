import { getSoldiers } from './service.js'

export async function showSoldiers(req, res, next) {
    try {
        const result = await getSoldiers()
        if (!result) return res.status(400)
        return res.json({ data: result })
    } catch (e) {
        next(e)
    }
}