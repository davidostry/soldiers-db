import {getSoldiersFromDB, createSoldier} from './repository.js'


export async function addSoldier(soldier){
    
    return await createSoldier(soldier)
}

export async function getSoldiers(filters){
    
    return await getSoldiersFromDB(filters)
}
