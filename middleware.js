export function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

export function validateBody(req, res, next) {
    const { name, role, military_rank, unit_name, age, service_status } = req.body
    if (!name || typeof name !== "string" || name.trim().length === 0) return res.status(400).json({ message: "valid name is missing" })
    if (!role || typeof role !== "string") return res.status(400).json({ message: "valid role is missing" })
    if (!military_rank || typeof military_rank !== "string") return res.status(400).json({ message: "valid military_rank is missing" })
    if (!unit_name || typeof unit_name !== "string") return res.status(400).json({ message: "valid unit_name is missing" })
    if (!age || isNaN(age) || age < 18) return res.status(400).json({ message: "valid age is missing" })
    if (!service_status || typeof service_status !== "string") return res.status(400).json({ message: "valid service_status is missing" })

    next()
}
