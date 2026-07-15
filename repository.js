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
    return rows[0];
}
export async function getSoldiersFromDB(filters = {}) {
    console.log(filters);

    let query = "SELECT * FROM soldiers WHERE 1=1";
    let values = [];

    if (filters.unit) {
        query += " AND unit_name = ?";
        values.push(filters.unit);
    }

    if (filters.rank) {
        query += " AND military_rank = ?";
        values.push(filters.rank);
    }

    if (filters.status) {
        query += " AND service_status = ?";
        values.push(filters.status);
    }

    const [rows] = await pool.execute(query, values);

    return rows;
}


export async function getSoldierById(id) {
    const [rows] = await pool.execute("select * from soldiers where id = ?", [id])
    console.log(rows);
    return rows;
}



export async function updateSoldier(id, soldier) {
    const [result] = await pool.execute("update soldiers set name = ?, role = ?, military_rank = ?, unit_name = ?, age = ?, service_status = ? where id = ?", [
        soldier.name,
        soldier.role,
        soldier.military_rank,
        soldier.unit_name,
        soldier.age,
        soldier.service_status,
        id])
    if (result.affectedRows == 0) {
        return null;
    }
    const [rows] = await pool.execute("select * from soldiers where id = ?", [id])
    console.log(rows);
    return rows;
}

export async function deleteSoldier(id) {
    const [result] = await pool.execute("delete from soldiers where id = ?", [id])

    
    if (result.affectedRows == 0) {
        return null;
    }
    return true
}

export async function apdateStatus(id){
    
}
