import {db, testTable} from "../db"


export const getAllTest = async () => {
    return db.select().from(testTable);
}

export const createTest = async (

) => {
    return
}