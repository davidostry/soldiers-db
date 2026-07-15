import {getSoldiersFromDB, createSoldier, getSoldierById, updateSoldier, deleteSoldier} from './repository.js'


export async function addSoldier(soldier){
    
    return await createSoldier(soldier)
}

export async function getSoldiers(filters){
    
    return await getSoldiersFromDB(filters)
}

export async function getSoldier(id){
    
    return await getSoldierById(id)
}

export async function updateDetailes(id, soldier){
    return await updateSoldier(id, soldier)
}

export async function deleteById(id){
    return await deleteSoldier(id)
}