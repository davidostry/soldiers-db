import {getAllSoldiers, createSoldier} from './repository.js'

export async function getSoldiers(){
    return await getAllSoldiers()
}

export async function addSoldier(soldier){
    return await createSoldier(soldier)
}