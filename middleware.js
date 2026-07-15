export function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
const fields = [

    "name",
    "role",
    "rank",
    "unit_name",
    "age",
    "service_status"
]
export function validateBody(fields) {
    return (req, res, next) => {
        for (const field of fields) {
            if (!req.body[field]) {
                return res.status(400).json({
                    message: `${field} is required`
                });
            }
        }

        next();
    };
}