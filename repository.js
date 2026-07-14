import { pool } from './db.js'

export async function getAllSoldiers() {
   const [query] = await pool.execute("select * from soldiers")
    return query
   
}

export async function getSoldierById(id) { }

export async function createSoldier(soldier) { }

export async function updateSoldier(id, soldier) { }

export async function deleteSoldier(id) { }