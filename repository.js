import { pool } from './db.js'

export async function createSoldier(soldier) {
    const [{ insertId }] = await pool.execute(
        `INSERT INTO soldiers
    (name, role, military_rank, unit_name, age, service_status)
    VALUES (?, ?, ?, ?, ?, ?)`,
        [
            soldier.name,
            soldier.role,
            soldier.military_rank,
            soldier.unit_name,
            soldier.age,
            soldier.service_status
        ]
    );
    const [rows] = await pool.execute("select * from soldiers where id = ?",
        [insertId]
    );
    return rows[0]
}

export async function getAllSoldiers() {
    const [query] = await pool.execute("select * from soldiers;")
    return query

}

export async function getSoldierById(id) { }



export async function updateSoldier(id, soldier) { }

export async function deleteSoldier(id) { }
